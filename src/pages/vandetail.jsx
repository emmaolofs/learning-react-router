import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './vandetail.css';
import iconGoBack from '../assets/images/icon-go-back.png';

function Vandetail() {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(()=> {
    fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
  }, [params.id])

    return (
      <div className='vanDetailContainer'>
        <Link className='linkVanDetail' to="/vans">
          <img src={iconGoBack} alt='icon-go-back' className='iconGoBack'/>
          <p className='linkText'>Back to all vans</p>
        </Link>
          {van ? (
            <div>
                <div className='vandetailImageContainer'>
                  <img src={van.imageUrl} alt='Van' className='vanDetailImage'/>
                </div>
                <p className={`van-type ${van.type} selected`}>{van.type}</p> 
                <h1>{van.name}</h1>
                <h2 className='vansPrice'>${van.price}</h2> 
                <p className='dayParagraph noneFloat'>/day</p>   
                <p className='vandetailDescription'>{van.description}</p>
            </div>
          ) : <h2>Loading...</h2>}
      </div>      
    )
  }

export default Vandetail;
import React, { useState, useEffect } from 'react';
import { createServer } from "miragejs";
import { Link } from 'react-router-dom';

import './vans.css';

let server = createServer()
server.get("/api/vans")

function Vans() {
    const [vans, setVans] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
      fetch("/api/vans")
        .then((res) => res.json())
        .then((json) => {
            setVans(json.vans)
        })
    }, [])

    function handleFiltering(btn) {
        setFilter(btn);
    }

    function removeFilter() {
        setFilter("");
    }

    return (
      <div className='vansSiteContainer'>
        <h1 className='vansHeader'>Explore our van options</h1>
        <div className='buttonContainer'>
            <div className='filterContainer'>
                <button className='btnFilter btn' onClick={() => {handleFiltering("Simple")}}>Simple</button>
                <button className='btnFilter btn' onClick={() => {handleFiltering("Luxury")}}>Luxury</button>
                <button className='btnFilter btn' onClick={() => {handleFiltering("Rugged")}}>Rugged</button>
            </div>
            <button className='btnClearFilters btn' onClick={removeFilter}>Clear Filters</button>
        </div>
        <div className='vanObjectContainer'>
            {vans.filter((van) =>
                van.type.includes(filter.toLowerCase())
            ).map(van => (
                <div key={van.id} className='vanObject'>
                    <Link className='link' to={`/vans/${van.id}`}>
                        <img src={van.imageUrl} alt='Van' className='vanImage'/>
                        <section className='textContainer'>
                            <h2 className='vansName'>{van.name}</h2>
                            <h2 className='vansPrice'>${van.price}</h2> 
                        </section>   
                        <p className='dayParagraph'>/day</p>   
                        <p className={`van-type ${van.type} selected`}>{van.type}</p>  
                    </Link>     
                </div>
            ))}
        </div>
      </div>
    )
  }

export default Vans;
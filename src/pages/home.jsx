import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    return (
      <div className='homeContainer'>
        <div className='homeTextContainer'>
            <h1 className='homeHeader'>You got the travel plans, we got the travel vans.</h1>
            <p className='homeDescription'>Add adventure to your life by joining the #vanlife movement. <br/> Rent the perfect van to make your perfect road trip.</p>
            <div className='buttonContainer'>
                <Link className='homeButton' to="/vans">Find your van</Link>
            </div>
        </div>
      </div>
    )
  }

export default Home;
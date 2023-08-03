import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

import imageAbout from '../assets/images/imageAbout.png';

function About() {
    return (
      <div className='aboutContainer'>
        <div className='aboutImageContainer'>
          <img src={imageAbout} alt='Van' className='aboutImage'/>
        </div>
        <div className='aboutTextContainer'>
            <h1 className='aboutHeader'>Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p className='aboutDescription'>
                Our mission is to enliven your road trip with the perfect travel van rental. 
                Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>
            <div className='aboutSection2Container'>
                <h2 className='abouth2'>Your destination is waiting. <br/> Your van is ready.</h2>
                <Link className='aboutButton' to="/vans">Explore our vans</Link>
            </div>
        </div>
      </div>
    )
  }

export default About;
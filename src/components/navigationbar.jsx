import React from 'react';
import { Link } from 'react-router-dom';
import './navigationbar.css';

function NavigationBar() {
    return (
        <header className='navContainer'>
            <Link className='link mainLink' to="/">#VANLIFE</Link>
            <nav className='secondLinkContainer'>
                <Link className='link secondLink abouLink' to="/about">About</Link>
                <Link className='link secondLink' to="/vans">Vans</Link>
            </nav>
        </header>
    )
  }

export default NavigationBar;
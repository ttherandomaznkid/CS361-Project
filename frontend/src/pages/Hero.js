import React from 'react'
import { Link } from 'react-scroll'

import './Hero.css'


const Hero = () => {

    const linkStyle = {
        margin: '1rem 0',
        width: '400px',
        backgroundColor: 'var(--secondary-color)',
        border: '1px solid var(--secondary-color)',
        color: '#333',

        padding: '17px 28px',
        fontSize: '1.2rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        borderRadius: '6px',
        cursor: 'pointer',
      };
      // const hoverStyle = {
      //   backgroundColor: 'var(--secondary-dark)',
      //   border: '1px solid var(--secondary-dark)',
      // };

    
    return (
        <div className='hero' id='hero'>
            <div className='content'>
                
                <h1>Welcome</h1>
                <p>to Travel Mapper</p>
                <p>Where to Next?</p>
                <br></br>
                <nav className='navbar'>
                <Link  to="create" spy={true} smooth={true} offset={50} duration={500} style={linkStyle} >Create Itinerary</Link>
                </nav>           
                </div>
        </div>
    )
}

export default Hero

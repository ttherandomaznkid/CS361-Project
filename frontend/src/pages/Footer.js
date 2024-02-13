import React from 'react'
import { Link } from 'react-scroll'

import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                <li className='nav-item'>
                        <Link  to="hero" spy={true} smooth={true} offset={50} duration={500} >Home</Link>
                    </li>
                    <li className='nav-item'>
                    <Link  to="about" spy={true} smooth={true} offset={50} duration={500} >About</Link>
                    </li>
                    <li className='nav-item'>
                    <Link  to="mission" spy={true} smooth={true} offset={50} duration={500} >Mission</Link>
                    </li>
                    <li className='nav-item'>
                    <Link  to="gallery" spy={true} smooth={true} offset={50} duration={500} >Gallery</Link>
                    </li>
                    <li className='nav-item'>
                    <Link  to="create" spy={true} smooth={true} offset={50} duration={500} >Create</Link>
                    </li>
                    
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2024 Travel Mapper, Inc. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer

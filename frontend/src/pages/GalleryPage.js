import React from 'react';
import ImageGallery from 'react-image-gallery';
import './GalleryPage.css';


const images = [
    {
        
        original: 'images/2-Walt-Disney-World.jpg',
        originalHeight: '540px',
    },
    {
        original: 'images/3-Disneyland.jpg',
        originalHeight: '540px',
    },
    {
        
        original: 'images/4-Space-Shuttle.jpg',
        originalHeight: '540px',
    },
    {
        original: 'images/5-Piazza-San-Marco.jpg',
        originalHeight: '540px',
    },
    {
        
        original: 'images/6-Temple-of-Heaven.jpg',
        originalHeight: '540px',
    },
    {
        original: 'images/7-Pandora.jpg',
        originalHeight: '540px',
    },
    {
        
        original: 'images/8-Ancient-Monkey-Gym.jpg',
        originalHeight: '540px',
    },
    {
        original: 'images/10-Giza-Sphinx.jpg',
        originalHeight: '540px',
    },


]
function GalleryPage() {
    return (
        <>
        <div className='gallery' id='gallery'>
                <div className='container'>
            <h1>Gallery</h1>        

            <ImageGallery items={images} />

            </div>
        </div>

        </>
    );
}

export default GalleryPage;
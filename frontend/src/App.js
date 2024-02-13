
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';


import LogPage from './pages/LogPage.js';
import EditPage from './pages/EditPage.js'
import Navbar from './pages/Navbar.js';
import Hero from './pages/Hero'
import About from './pages/About'
import MissionStatement from './pages/MissionStatement.js';
import GalleryPage from './pages/GalleryPage.js'
import CreatePage from './pages/CreatePage.js'
import Footer from './pages/Footer.js';




function App() {
  const [destination, setDestination] = useState([])

  return (
    <>

      <Navbar />
      <Hero />
      <About />
      <MissionStatement />
      <GalleryPage />

      <BrowserRouter >

       <Routes>
    
                <Route path="/" element={<LogPage setDestination={setDestination}/>} />
                <Route path="/edit-destination" element={<EditPage destination={destination}/>} />
                <Route path="/add-destination" element={<CreatePage />} />
                {/* <Route path="/contact" element={<ContactPage />} />  */}
                {/* <Route path="/blog" element={<BlogPage />} />  */}
            </Routes>

      </BrowserRouter>
      
      <Footer />
      </>
    );
  }

export default App;

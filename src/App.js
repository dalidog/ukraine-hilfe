import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import Donate from './pages/Donate';
import PastProjects from './pages/PastProjects';
import leftFlowers from 'url:./images/Flowers_1.png';
import imgurl2 from 'url:./images/Slava_Ukraini.png';
import rightFlowers from 'url:./images/Flowers_2.png';
import Donate from './pages/Donate';
import PastProjects from './pages/PastProjects';
import leftFlowers from 'url:./images/Flowers_1.png';
import imgurl2 from 'url:./images/Slava_Ukraini.png';
import rightFlowers from 'url:./images/Flowers_2.png';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <div className="hero">
                    <div className="hero-center">
                        <img src={leftFlowers} alt="" className="flowers left" />

                        <div className="hero-text">
                            <h1>Ukraine-Hilfe e.V.</h1>
                            <h2>Ein Herz für die Ukraine</h2>
                            <img src={imgurl2} alt="donation image" className="hero-image" />
                        </div>

                        <img src={rightFlowers} alt="" className="flowers right" />
                    </div>
                </div>
                <div>
                    {/* Define routes */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/donations" element={<Donate />} />
                        <Route path="/past-work" element={<PastProjects />} />
                    </Routes>
                </div>
            </BrowserRouter >
        </div >
            </BrowserRouter >
        </div >
    );
}

export default App;
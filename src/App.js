import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Social from './pages/Social';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <h1>Ukraine-Hilfe e.V.</h1>
                <h2>Ein Herz für die Ukraine</h2>

                <div>
                    {/* Include the Navigation component here so it appears on all pages */}

                    {/* Define routes */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} /> {/* Add route to About page */}
                        <Route path="/social" element={<Social />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;

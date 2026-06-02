import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import logoUrl from 'url:../images/logo_circle.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo-container">
                <img src={logoUrl} alt="Logo" width={80} height={80} />

                <NavLink to="/" className="logo-text">
                    Ukraine Hilfe
                </NavLink>

                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </div>

            <nav className={`menu ${menuOpen ? 'open' : ''}`}>
                <ul className="menu-list">
                    <li className="menu-item">
                        <NavLink
                            to="/"
                            className="menu-link"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className="menu-item">
                        <NavLink
                            to="/about"
                            className="menu-link"
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </NavLink>
                    </li>

                    <li className="menu-item">
                        <NavLink
                            to="/donations"
                            className="menu-link"
                            onClick={() => setMenuOpen(false)}
                        >
                            Donations
                        </NavLink>
                    </li>

                    <li className="menu-item">
                        <NavLink
                            to="/past-work"
                            className="menu-link"
                            onClick={() => setMenuOpen(false)}
                        >
                            Past Projects
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

// import React from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import '../styles/Header.css';
// import logoUrl from 'url:../images/logo_circle.png';

// function Header() {
//     const location = useLocation();
//     const refresh = () => {
//         window.location.reload();
//     };

//     const getPageTitle = () => {
//         switch (location.pathname) {
//             case '/':
//                 return (
//                     <>
//                         <span className="title-main">Ukraine Hilfe</span>
//                         <span className="title-highlight"></span>
//                     </>
//                 );
//             case '/about':
//                 return (
//                     <>
//                         <span className="title-main">About</span>
//                         <span className="title-highlight"></span>
//                     </>
//                 );
//             case '/donations':
//                 return (
//                     <>
//                         <span className="title-main">Donations</span>
//                         <span className="title-highlight"></span>
//                     </>
//                 );
//             case '/past-work':
//                 return (
//                     <>
//                         <span className="title-main">Past Work</span>
//                         <span className="title-highlight"></span>
//                     </>
//                 );
//             default:
//                 return <span className="title-single">UkraineHilfe</span>;
//         }
//     };

//     return (
//         <header className="header">
//             <div className="logo-container">
//                 <img src={logoUrl} alt="Logo" width={80} height={80} />
//                 <NavLink to="/" className="logo-text">
//                     Ukraine Hilfe
//                 </NavLink>
//             </div>

//             <div className="menu-container">
//                 <nav className="menu">
//                     <ul className="menu-list">
//                         <li className="menu-item">
//                             <NavLink to="/" className="menu-link" activeclassname="active">
//                                 Home
//                             </NavLink>
//                         </li>
//                         <li className="menu-item">
//                             <NavLink to="/about" className="menu-link" activeclassname="active">
//                                 About
//                             </NavLink>
//                         </li>
//                         <li className="menu-item">
//                             <NavLink to="/donations" className="menu-link" activeclassname="active">
//                                 Donations
//                             </NavLink>
//                         </li>
//                         <li className="menu-item">
//                             <NavLink to="/past-work" className="menu-link" activeclassname="active">
//                                 Past Projects
//                             </NavLink>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     );
// }

// export default Header;
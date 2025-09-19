import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    const location = useLocation();
    const refresh = () => {
        window.location.reload();
    };

    const getPageTitle = () => {
        switch (location.pathname) {
            case '/':
                return (
                    <>
                        <span className="title-main">Ukraine Hilfe</span>
                        <span className="title-highlight"></span>
                    </>
                );
            // case '/uk':
            //     return (
            //         <>
            //             <span className="title-main">Cardiovascular Diseases: UK</span>
            //             <span className="title-highlight"></span>
            //         </>
            //     );
            default:
                return <span className="title-single">UkraineHilfe</span>;
        }
    };

    return (
        <header className="header">
            <div className="logo-container">
                <button className="logo-text" type="button" onClick={refresh}>
                    Ukraine Hilfe
                </button>
            </div>

            <div className="menu-container">
                <nav className="menu">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <NavLink to="/" className="menu-link" activeclassname="active">
                                Home
                            </NavLink>
                        </li>
                        {/* <li className="menu-item">
                            <NavLink to="/uk" className="menu-link" activeClassName="active">
                                UK Map
                            </NavLink>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
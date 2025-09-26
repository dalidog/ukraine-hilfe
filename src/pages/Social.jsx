import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="main-header">
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Über uns</Link></li>
                    <li><Link to="/social">Social Media</Link></li> {/* New link */}
                </ul>
            </nav>

            <style jsx>{`
                .main-header {
                    background-color: #0057b7; /* Ukrainian blue */
                    padding: 15px 0;
                    margin-bottom: 20px;
                }

                .navigation ul {
                    list-style: none;
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                    margin: 0;
                    padding: 0;
                }

                .navigation a {
                    color: #ffd700; /* Ukrainian yellow */
                    text-decoration: none;
                    font-weight: bold;
                    padding: 10px 15px;
                    border-radius: 5px;
                    transition: background-color 0.3s;
                }

                .navigation a:hover {
                    background-color: rgba(255, 215, 0, 0.2);
                }

                @media (max-width: 768px) {
                    .navigation ul {
                        flex-direction: column;
                        gap: 10px;
                    }
                }
            `}</style>
        </header>
    );
};

export default Header;

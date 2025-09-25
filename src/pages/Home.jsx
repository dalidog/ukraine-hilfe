import React from 'react';
import Header from '../components/Header';

import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="donation-container">
                <div className="donation-box">
                    <h3>Donations with PayPal</h3>
                    <br></br><br></br>
                    <a
                        className="paypal-button"
                        href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=ukrainehilfe.e.v%40gmx.de&item_name=Ukraine-Hilfe+Berlin+e.V.&currency_code=EUR&source=url"
                        target="_blank" rel="noopener"
                    >
                        Click Here
                    </a>

                </div>
                <div className="donation-box">
                    <h3>Bank Transfers</h3>
                    <p>Beneficiary organization: Ukraine-Hilfe e.V. <br></br>

                        Bank: Taunus Sparkasse <br></br>

                        Bank Address: Ludwig-Erhard-Anlage 6+7, 61352 Bad Homburg v.d.H., Germany <br></br>

                        IBAN: DE17 5125 0000 0001 1871 12<br></br>

                        BIC: HELADEF1TSK</p>
                </div>
            </div>
        </>
    );
}

export default Home;
import React from 'react';
import Header from '../components/Header';

import { NavLink } from 'react-router-dom';
import logoUrl from 'url:../images/PayPal.svg.png';

function Home() {
    return (
        <>
            <p>We are a group of volunteers from Germany, UK and Ukraine who are deeply disturbed by the criminal aggression of Putin’s armies in Ukraine. Regardless of our different origins and places of living, we share the same understanding of justice, humanity, responsibility, and of a pressing need to act.</p>

            <p><b>We believe that the justice is up to us, and we stand up.</b></p>

            <p>Significant part of Ukrainian civil population suffers in the war zone. Thousands have lost their lives. Those who have survived often have lost their properties and are subject to human hunting by the enemy drones, bombing and artillery shelling. The access to medical care, evacuation transport or supply with the most needed consumable goods collapses lacking proper cars. Ukraine-Hilfe e.V. supplies offroad vehicles and trucks to the regional governments and forces in charge of rescue civilians.

                Since the begin of the full scale aggression, we have supplied more than 100 all-terrain vehicles from Great Britain to Ukraine and conducted volunteer projects across Ukraine in areas of healthcare, education, and protection equipment.</p>
            <p><b>Ukraine-Hilfe e.V. is a certified charity NGO in Germany, eligible for tax deduction for donations.</b></p>
            {/* <div className="donation-container">
                <div className="donation-box">
                    <h3>Donations with PayPal</h3>
                    <br></br><br></br>
                    <a
                        className="paypal-button"
                        href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=ukrainehilfe.e.v%40gmx.de&item_name=Ukraine-Hilfe-e.V.&currency_code=EUR&source=url"
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
            </div> */}
            <div className="donation-container">
                {/* LEFT SIDE — 1/3 width */}
                <div className="donation-box paypal-box">
                    <h3>Donate with PayPal:</h3>
                    <br />
                    <a
                        className="paypal-button"
                        href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=ukrainehilfe.e.v%40gmx.de&item_name=Ukraine-Hilfe-e.V.&currency_code=EUR&source=url"
                        target="_blank"
                        rel="noopener"
                    >
                        <img src={logoUrl} alt="PayPal" className="button-icon" />
                    </a>
                </div>

                {/* RIGHT SIDE — 2/3 width, 2 columns */}
                <div className="donation-box bank-box">
                    <h3>Bank Transfers</h3>

                    <div className="bank-columns">
                        {/* COLUMN 1 */}
                        <div className="bank-column">
                            <p>
                                <strong><em>EU</em></strong><br />
                                <strong>Beneficiary:</strong> Ukraine-Hilfe e.V.<br />
                                <strong>Bank:</strong> Taunus Sparkasse<br />
                                <strong>Address:</strong> Ludwig-Erhard-Anlage 6+7, 61352 Bad Homburg v.d.H., Germany<br />
                                <strong>IBAN:</strong> DE17 5125 0000 0001 1871 12<br />
                                <strong>BIC:</strong> HELADEF1TSK
                            </p>
                        </div>

                        {/* COLUMN 2 — second account info goes here */}
                        <div className="bank-column">
                            <p>
                                <strong><em>USA</em></strong><br />
                                <strong>Beneficiary:</strong> Ukraine Rising Foundation Inc<br />
                                <strong>Address:</strong> 228 Park Ave. S., PMB 60917, New York, NY 10003<br />
                                <strong>Bank:</strong> Citibank<br />
                                <strong>Bank Address:</strong> 378 Route 3 W., Clifton, NJ 7014<br />
                                <strong>Account Number:</strong> 9348526274<br />
                                <strong>Routing Number:</strong> 021272655<br />
                                <strong>Transfer Note:</strong> Support Ukraine-Hilfe e.V.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;
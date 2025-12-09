import React from 'react';
import imgurl from 'url:../images/Donations8.jpeg';
import imgurl2 from 'url:../images/Donations9.jpeg';

function Donate() {
    return (
        <>
            <h2>Where Your Donations Go</h2>
            <div className="about-container">
                <div className="about-box">
                    <h3>HUMANITARIAN AID</h3>
                    <br></br>
                    <p> Approximately 20% of Ukraine is under Russian occupation (1). The border of the occupied territory, however, is not  well-defined. — the warzone is hundreds of miles wide. Tens of thousands of Ukrainians are trapped due to daily shelling, with many unable to leave their homes for  financial and medical complications (9, 10). Those surviving in the gray zones report the collapse of cities from targeted airstrikes on social infrastructures and hospitals, deprivation of communication, and daily loss of life from shelling and lack of medical aid (8, 10, 11).
                        <br></br><br></br>
                        While donations of humanitarian aid continuously flow into Ukraine from all over the world, it’s an incredible challenge to bring it to those who need it most. The primary complication has been Russia’s military using drones to target and destroy  humanitarian corridors (2, 3) and any moving vehicle not identified as Russian, (i.e. ambulances (4), civilian cars (5), and cyclists (6, 7)). This makes transporting resources to war-torn areas and evacuating injured civilians difficult and dangerous.
                    </p>

                </div>
                <div className="about-box">
                    <h3>PARTNERSHIPS</h3>
                    <p><i>Ukraine-Hilfe</i> is one of the few non-profit foundations that works directly with Ukraine's brigades to deliver aid to their exact location of need, including:
                    </p>
                    <ul>
                        <li>12th Special Forces Brigade "Azov"</li>
                        <li>21st Infantry Brigade "Petro Kalnyshevsky"</li>
                        <li>93th Brigade "Kholodnyi Yar"</li>
                        <li>117th Mechanized Brigade</li>
                        <li>127th Territory Defence Brigade</li>
                        <li>128th Separate Territorial Defence Brigade "Wild Field"</li>
                        <li>128th Mountain Assault Brigade "Zakarpattia"</li>
                        <li>156 Separate Motorized Infantry Brigade</li>

                    </ul>
                    <div className="donate-img-container">
                        <div className="donate-img-wrapper">
                            <img src={imgurl} alt="donation image" />
                        </div>
                        <div className="donate-img-wrapper">
                            <img src={imgurl2} alt="donation image 2" />
                        </div>
                    </div>
                </div>
            </div>
            <h3>SOURCES</h3>
            <ol type="1">
                <li id="source1">
                    <a href="https://www.cfr.org/in-brief/comparing-size-and-capabilities-russian-and-ukrainian-militaries"
                        target="_blank" rel="noopener noreferrer"
                        title="Comparing the Size and Capabilities of the Russian and Ukrainian Militaries">Comparing the Size and Capabilities of the Russian and Ukrainian Militaries</a>
                </li>

                <li id="source2">
                    <a href="https://www.britannica.com/event/2022-Russian-invasion-of-Ukraine"
                        target="_blank" rel="noopener noreferrer"
                        title="Britannica summary of the Russian invasion of Ukraine">Britannica summary of the Russian invasion of Ukraine</a>
                </li>

                <li id="source3">
                    <a href="https://www.theguardian.com/world/2022/apr/26/russia-accused-of-shelling-mariupol-humanitarian-corridor#:~:text=Daniel%20Boffey%20in%20Brussels%20and,even%20a%20fly%20comes%20through%E2%80%9D"
                        target="_blank" rel="noopener noreferrer"
                        title="Russia accused of shelling Mariupol humanitarian corridor">Russia accused of shelling Mariupol humanitarian corridor</a>
                </li>

                <li id="source4">
                    <a href="https://www.aljazeera.com/features/2025/7/30/they-chase-ambulances-russias-record-attacks-on-ukraines-healthcare"
                        target="_blank" rel="noopener noreferrer"
                        title="‘They chase ambulances:’ Russia’s ‘record’ attacks on Ukraine’s healthcare">‘They chase ambulances:’ Russia’s ‘record’ attacks on Ukraine’s healthcare</a>
                </li>

                <li id="source5">
                    <a href="https://www.hrw.org/news/2022/05/02/ukraine-russian-forces-fired-civilian-vehicles"
                        target="_blank" rel="noopener noreferrer"
                        title="Ukraine: Russian Forces Fired On Civilian Vehicles">Ukraine: Russian Forces Fired On Civilian Vehicles</a>
                </li>

                <li id="source6">
                    <a href="https://gwaramedia.com/en/russian-fpv-drone-killed-civilian-riding-bicycle-in-kharkiv-oblast/"
                        target="_blank" rel="noopener noreferrer"
                        title="Russian FPV drone killed civilian riding bicycle in Kharkiv Oblast">Russian FPV drone killed civilian riding bicycle in Kharkiv Oblast</a>
                </li>

                <li id="source7">
                    <a href="https://mezha.net/eng/bukvy/russian-drone-attack-kills-cyclist-in-kherson-on-july-11/#:~:text=On%20July%2011%2C%20in%20the,a%20result%20of%20this%20incident"
                        target="_blank" rel="noopener noreferrer"
                        title="Russian Drone Attack Kills Cyclist in Kherson on July 11">Russian Drone Attack Kills Cyclist in Kherson on July 11</a>
                </li>

                <li id="source8">
                    <a href="https://www.careinternational.org.uk/news-stories/ukraine-what-does-it-feel-like-to-live-in-a-warzone-for-1000-days/"
                        target="_blank" rel="noopener noreferrer"
                        title="Ukraine: What does it feel like to live in a warzone for 1,000 days?">Ukraine: What does it feel like to live in a warzone for 1,000 days?</a>
                </li>

                <li id="source9">
                    <a href="https://www.hrw.org/news/2022/05/02/ukraine-russian-forces-fired-civilian-vehicles"
                        target="_blank" rel="noopener noreferrer"
                        title="How Does Russia’s War against Ukraine Affect Civilians Living Near Front Lines?">How Does Russia’s War against Ukraine Affect Civilians Living Near Front Lines?</a>
                </li>

                <li id="source10">
                    <a href="https://geographical.co.uk/culture/surviving-in-ukraines-grey-zone"
                        target="_blank" rel="noopener noreferrer"
                        title="Surviving in Ukraine’s ‘Grey Zone’">Surviving in Ukraine’s ‘Grey Zone’</a>
                </li>

                <li id="source11">
                    <a href="https://ukraine.un.org/en/289667-civilian-harm-and-human-rights-abuses-persist-ukraine-war-enters-fourth-year"
                        target="_blank" rel="noopener noreferrer"
                        title="Civilian Harm and Human Rights Abuses Persist in Ukraine as War Enters Fourth Year">Civilian Harm and Human Rights Abuses Persist in Ukraine as War Enters Fourth Year</a>
                </li>
            </ol>
        </>

    );
}

export default Donate; 
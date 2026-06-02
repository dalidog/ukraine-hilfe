import React from 'react';
import imgurl1 from 'url:../images/past_work/proj1_1.jpeg';
import imgurl2 from 'url:../images/past_work/proj1_2.jpeg';
import imgurl3 from 'url:../images/past_work/proj1_3.jpeg';
import imgurl4 from 'url:../images/past_work/proj1_4.jpeg';
import imgurl5 from 'url:../images/past_work/proj1_5.jpeg';
import imgurl6 from 'url:../images/past_work/proj1_6.jpeg';

import imgurl7 from 'url:../images/past_work/proj2_1.jpeg';

import imgurl8 from 'url:../images/past_work/proj3_1.jpeg';
import imgurl9 from 'url:../images/past_work/proj3_2.jpeg';
import imgurl10 from 'url:../images/past_work/proj3_3.jpeg';
import imgurl11 from 'url:../images/past_work/proj3_4.jpeg';

import imgurl12 from 'url:../images/past_work/proj4_1.jpeg';
import imgurl13 from 'url:../images/past_work/proj4_2.jpeg';
import imgurl14 from 'url:../images/past_work/proj4_3.jpeg';
import imgurl15 from 'url:../images/past_work/proj4_4.jpeg';
import imgurl16 from 'url:../images/past_work/proj4_5.png';

import imgurl17 from 'url:../images/past_work/proj5_1.jpeg';
import imgurl18 from 'url:../images/past_work/proj5_2.jpeg';
import imgurl19 from 'url:../images/past_work/proj5_3.jpeg';
import imgurl20 from 'url:../images/past_work/proj5_4.jpeg';
import imgurl21 from 'url:../images/past_work/proj5_5.png';

import imgurl22 from 'url:../images/past_work/proj6_1.jpeg';
import imgurl23 from 'url:../images/past_work/proj6_2.jpeg';
import imgurl24 from 'url:../images/past_work/proj6_3.jpeg';
import imgurl25 from 'url:../images/past_work/proj6_4.jpeg';
import imgurl26 from 'url:../images/past_work/proj6_5.jpeg';
import imgurl27 from 'url:../images/past_work/proj6_6.jpeg';

import imgurl28 from 'url:../images/past_work/proj7_1.jpeg';
import imgurl29 from 'url:../images/past_work/proj7_2.jpeg';
import imgurl30 from 'url:../images/past_work/proj7_3.jpeg';
import imgurl31 from 'url:../images/past_work/proj7_4.jpeg';

import imgurl32 from 'url:../images/past_work/proj8_1.jpeg';
import imgurl33 from 'url:../images/past_work/proj8_2.jpeg';

import imgurl34 from 'url:../images/past_work/proj9_1.jpeg';
import imgurl35 from 'url:../images/past_work/proj9_2.jpeg';
import imgurl36 from 'url:../images/past_work/proj9_3.jpeg';
import imgurl37 from 'url:../images/past_work/proj9_4.jpeg';
import imgurl38 from 'url:../images/past_work/proj9_5.jpeg';

import imgurl39 from 'url:../images/past_work/proj10_1.jpeg';
import imgurl40 from 'url:../images/past_work/proj10_2.jpeg';
import imgurl41 from 'url:../images/past_work/proj10_3.jpeg';
import imgurl42 from 'url:../images/past_work/proj10_4.jpeg';


import imgurl43 from 'url:../images/past_work/proj11_1.png';
import imgurl44 from 'url:../images/past_work/proj11_2.jpg';
import imgurl45 from 'url:../images/past_work/proj11_3.jpg';
import imgurl46 from 'url:../images/past_work/proj11_4.jpg';
import imgurl47 from 'url:../images/past_work/proj11_5.jpg';
import imgurl48 from 'url:../images/past_work/proj11_6.png';
import imgurl49 from 'url:../images/past_work/proj11_7.jpeg';

import Carousel from "../components/ui/Carousel";

function PastProjects() {
    const slides1 = [
        { type: "image", src: imgurl1, alt: "Project 1 Img 1" },
        { type: "image", src: imgurl2, alt: "Project 1 Img 2" },
        { type: "image", src: imgurl3, alt: "Project 1 Img 3" },
        { type: "image", src: imgurl4, alt: "Project 1 Img 4" },
        { type: "image", src: imgurl5, alt: "Project 1 Img 5" },
        { type: "image", src: imgurl6, alt: "Project 1 Img 6" },
    ]
    const slides2 = [
        { type: "image", src: imgurl7, alt: "Project 2 Img 1" },
    ]
    const slides3 = [
        { type: "image", src: imgurl8, alt: "Project 3 Img 1" },
        { type: "image", src: imgurl9, alt: "Project 3 Img 1" },
        { type: "image", src: imgurl10, alt: "Project 3 Img 1" },
        { type: "image", src: imgurl11, alt: "Project 3 Img 1" },
    ]
    const slides4 = [
        { type: "image", src: imgurl12, alt: "Project 4 Img 1" },
        { type: "image", src: imgurl13, alt: "Project 4 Img 2" },
        { type: "image", src: imgurl14, alt: "Project 4 Img 3" },
        { type: "image", src: imgurl15, alt: "Project 4 Img 4" },
        { type: "image", src: imgurl16, alt: "Project 4 Img 5" },
    ]
    const slides5 = [
        { type: "image", src: imgurl17, alt: "Project 5 Img 1" },
        { type: "image", src: imgurl18, alt: "Project 5 Img 2" },
        { type: "image", src: imgurl19, alt: "Project 5 Img 3" },
        { type: "image", src: imgurl20, alt: "Project 5 Img 4" },
        { type: "image", src: imgurl21, alt: "Project 5 Img 5" },
    ]
    const slides6 = [
        { type: "image", src: imgurl22, alt: "Project 6 Img 1" },
        { type: "image", src: imgurl23, alt: "Project 6 Img 2" },
        { type: "image", src: imgurl24, alt: "Project 6 Img 3" },
        { type: "image", src: imgurl25, alt: "Project 6 Img 4" },
        { type: "image", src: imgurl26, alt: "Project 6 Img 5" },
        { type: "image", src: imgurl27, alt: "Project 6 Img 6" },
    ]

    const slides7 = [
        { type: "image", src: imgurl28, alt: "Project 7 Img 1" },
        { type: "image", src: imgurl29, alt: "Project 7 Img 2" },
        { type: "image", src: imgurl30, alt: "Project 7 Img 3" },
        { type: "image", src: imgurl31, alt: "Project 7 Img 4" },
    ]

    const slides8 = [
        { type: "image", src: imgurl32, alt: "Project 8 Img 1" },
        { type: "image", src: imgurl33, alt: "Project 8 Img 2" },
    ]

    const slides9 = [
        { type: "image", src: imgurl34, alt: "Project 9 Img 1" },
        { type: "image", src: imgurl35, alt: "Project 9 Img 2" },
        { type: "image", src: imgurl36, alt: "Project 9 Img 3" },
        { type: "image", src: imgurl37, alt: "Project 9 Img 4" },
        { type: "image", src: imgurl38, alt: "Project 9 Img 5" },
    ]

    const slides10 = [
        { type: "image", src: imgurl39, alt: "Project 10 Img 1" },
        { type: "image", src: imgurl40, alt: "Project 10 Img 2" },
        { type: "image", src: imgurl41, alt: "Project 10 Img 3" },
        { type: "image", src: imgurl42, alt: "Project 10 Img 4" },
    ]

    const slides11 = [
        { type: "image", src: imgurl43, alt: "Project 11 Img 1" },
        { type: "image", src: imgurl44, alt: "Project 11 Img 2" },
        { type: "image", src: imgurl45, alt: "Project 11 Img 3" },
        { type: "image", src: imgurl46, alt: "Project 11 Img 4" },
        { type: "image", src: imgurl47, alt: "Project 11 Img 5" },
        { type: "image", src: imgurl48, alt: "Project 11 Img 6" },
        { type: "image", src: imgurl49, alt: "Project 11 Img 7" },
    ]



    return (
        <section>
            <h2 className="text-2xl font-semibold mb-4 text-center">Past Projects</h2>
            <div className="project-container">
                <div className="project-box">
                    <div className="project-media">
                        <Carousel slides={slides11} />
                    </div>
                    <div className="project-text">
                        <div className="project-date">April 2026</div>
                        <p>
                            Ukraine-Hilfe has brought another small convoy to Ukraine. While traveling through Germany, we loaded fire extinguishers, which were eventually delivered to our friends in the 127th Brigade in the Kharkiv region.
                        </p>
                    </div>
                </div>
            </div>
            <div className="project-container">
                <div className="project-box">
                    <div className="project-media">
                        <Carousel slides={slides10} />
                    </div>
                    <div className="project-text">
                        <div className="project-date">April 2026</div>
                        <p>
                            This almost-new quadricycle is about to be delivered to our friends in the 127th Territorial Defence, who are fighting in the Kupjansk direction. The truck carrying the quad will then join a different unit nearby.
                        </p>
                    </div>
                </div>
            </div>
            <div className="project-container">
                <div className="project-box">
                    <div className="project-media">
                        <Carousel slides={slides9} />
                    </div>
                    <div className="project-text">
                        <div className="project-date">March 2026</div>
                        <p>
                            Together with Adolf-Reichwein-Gymnasium, Ukraine-Hilfe e.V. hosted a panel discussion featuring two members of the German Parliament, Omid Nouripour and Markus Koob, the former serving as a Vice President of the Bundestag. Other guests included Boris Zimin, a business investor, as well as Igor Tartakovski, the chairman of our organization. We were particularly honored to have two officers of the Ukrainian Defence Forces join us via video conference.

                            The discussion addressed a wide range of topics, from the origins of Russia’s aggression against Ukraine to the positioning of Germany and other countries in response to rapidly evolving security threats, as well as the most urgent current needs on the front lines. Approximately 300 students attended the event and engaged actively by asking additional questions to the panel.

                            Recordings of parts of the event (with English subtitles) are available on our <a href="https://www.youtube.com/@Ukraine-Hilfe-BadHomburg"
                                target="_blank" rel="noopener noreferrer"
                            >YouTube channel</a>.
                        </p>
                    </div>
                </div>
            </div>
            <div className="project-container">
                <div className="project-box">
                    <div className="project-media">
                        <Carousel slides={slides1} />
                    </div>
                    <div className="project-text">
                        <div className="project-date">December 2025</div>
                        <p>
                            Ukraine-Hilfe e.V., together with Techno Varta, purchased and shipped four trucks to the 127th Brigade of the Territorial Defence. This short photo story shows the journey of one of the vehicles: shortly after purchase, during shipment by ferry, and later crossing Ukraine with a stop at a gas station along the way. After the long delivery, the trucks were handed over at Freedom Square in Kharkiv.
                        </p>
                        <p>
                            The vehicle was immediately deployed to the front line for use as a medevac. Just one week later, it was attacked by a Russian drone. Thankfully, there were no casualties, but the truck sustained serious damage. In the final image, one of the soldiers is seen attempting to repair the vehicle so it could reach the garage without being towed. Despite major repairs still ahead, we are proud that this truck helped defend Ukrainian land in the Kupiansk direction.
                        </p>
                    </div>
                </div>
            </div>
            <div className="project-container">
                <div className="project-box">
                    <div className="project-media">
                        <Carousel slides={slides8} />
                    </div>
                    <div className="project-text">
                        <div className="project-date">July 2025</div>
                        <p>
                            A car was delivered to the UAV batallion of the 93 Brigade. The handover is not pictured so as not to disclose the faces of the UAV unit.
                        </p>
                    </div>
                </div>
            </div>
            <div className="project-container">
                <div className="project-box">
                    <div className="project-media">
                        <Carousel slides={slides7} />
                    </div>
                    <div className="project-text">
                        <div className="project-date">June 2025</div>
                        <p>
                            A truckload of mask nets and potable water were delivered to the 93rd Brigade.
                        </p>
                    </div>
                </div>
            </div>
            <div className="project-container">
                <div className="project-box">
                    <div className="project-media">
                        <Carousel slides={slides6} />
                    </div>
                    <div className="project-text">
                        <div className="project-date">April 2025</div>
                        <p>
                            A truck was delivered to the 93rd Mechanized Brigade. To learn more about the garage
                            inspection and fitting of the vehicle, please visit our partner organization Techno Varta’s
                            Facebook page:
                            (<a href="https://www.facebook.com/share/v/1BjxBR8QLa/"
                                target="_blank" rel="noopener noreferrer"
                            >1</a>,
                            <a href="https://www.facebook.com/share/v/16RWtE6VNR/"
                                target="_blank" rel="noopener noreferrer"
                            >2</a>)
                        </p>
                        <p>
                            The letter written from the commander of the 93rd Brigade, Shamil Krutkow, reads:
                            <br /><br />
                            “The officers and staff of military unit A1302 are grateful for the assistance you have
                            provided. Without a doubt, the civil position you take and your hard and selfless work
                            are a substantial contribution to the fighting capacity of the Ukrainian Armed Forces.”
                        </p>
                    </div>
                </div>
            </div>
            <div className="project-container">
                <div className="project-box">
                    <div className="project-media">
                        <Carousel slides={slides5} />
                    </div>
                    <div className="project-text">
                        <div className="project-date">March 2025</div>
                        <p>
                            A truck with a spare engine was delivered to the 72nd Mechanized Brigade.
                        </p>
                    </div>
                </div>
            </div>
            <div className="project-container">
                <div className="project-box">
                    <div className="project-media">
                        <Carousel slides={slides4} />
                    </div>
                    <div className="project-text">
                        <div className="project-date">February 2025</div>
                        <p>
                            This Nissan X-Trail was delivered to the 33rd Mechanized Brigade, in one of the most
                            difficult battle zones near Pokrovsk. Officers noted the vehicle’s good technical
                            condition. The car was delivered by our partner Techno Varta.
                        </p>
                    </div>
                </div>
            </div>
            <div className="project-container">
                <div className="project-box">
                    <div className="project-media">
                        <Carousel slides={slides3} />
                    </div>
                    <div className="project-text">
                        <div className="project-date">May 2024</div>
                        <p>
                            Ukraine-Hilfe e.V. provided a medevac pickup truck and supplies for a new field medicine unit.
                        </p>
                    </div>
                </div>
            </div>
            <div className="project-container">
                <div className="project-box">
                    <div className="project-media">
                        <Carousel slides={slides2} />
                    </div>
                    <div className="project-text">
                        <div className="project-date">December 2024</div>
                        <p>
                            The Nissan vehicle (left) was delivered to the 21st Separate Cavalry Brigade by our partner Techno Varta.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PastProjects
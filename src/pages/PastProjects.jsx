import React from 'react';
import imgurl1 from 'url:../images/Donations8.jpeg';
import imgurl2 from 'url:../images/Donations9.jpeg';
import Carousel from "../components/ui/Carousel";

function PastProjects() {
    const slides = [
        { src: imgurl1, alt: "Project 1" },
        { src: imgurl2, alt: "Project 2" },
    ]

    return (
        <section className="p-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Past Work</h2>
            {/* <img src={imgurl3} alt="test" style={{ width: '300px' }} /> */}
            <Carousel slides={slides} />
        </section>
    )
}

export default PastProjects
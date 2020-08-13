import React, { useEffect } from 'react'
import { Events, scrollSpy, Element } from 'react-scroll';

import { FaFileCode, FaMobileAlt, FaAndroid, FaServer } from 'react-icons/fa'
import './Skills.css'
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 5 // optional, default to 1.
    },
    tabletMax: {
        breakpoint: { max: 1024, min: 720 },
        items: 4,
        slidesToSlide: 4// optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 720, min: 600 },
        items: 3,
        slidesToSlide: 4// optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 600, min: 400 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile2: {
        breakpoint: { max: 400, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

export default function Skills() {

    useEffect(() => {
        Events.scrollEvent.register('begin', (to, element) => {
            console.log('begin', arguments);
        });
        scrollSpy.update();
    }, [])
    return (
        <Element name="begin">
            <div className={"container-skills-fadein"}>
                <div className="section-skills">
                    <div className="skill-column">
                        <div className="item-column-skill">
                            <FaFileCode color="#ffffff" size="4rem" />
                            <p> Desarrollo web frontend ReactJS</p>
                        </div>
                        <div className="item-column-skill">
                            <FaMobileAlt color="#ffffff" size="4rem" />
                            <p>Desarrollo móvil ReactNative</p>
                        </div>
                    </div>
                    <div className="skill-column">
                        <div className="item-column-skill">
                            <FaAndroid color="#ffffff" size="4rem" />
                            <p>Desarrollo móvil nativo Android</p>
                        </div>
                        <div className="item-column-skill">
                            <FaServer color="#ffffff" size="4rem" />
                            <p>Desarrollo backend (NodeJS, Golang)</p>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

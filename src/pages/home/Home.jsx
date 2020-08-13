import React from 'react'
import Header from '../../components/header/Header'
import Information from '../../components/generalInformation/Information'
import CarouselSkills from '../../components/skills/Skills'
import useWindowSize from '../../hooks/useWindowSize'
import Particles from 'react-particles-js';
import './Home.css'


export default function Home() {
    const size = useWindowSize();
    return (
        <div className="section-home-page">
            <div className="section-home-header">
                <Header />
                <div className="container-home-information">
                    <Information />
                </div>
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": size.numberParticles
                            },
                            "size": {
                                "value": 2
                            },
                            "color": {
                                "value": '#730C94'
                            },
                            "line_linked": {
                                "color": "#D487BA",

                            }


                        },
                        "polygon": {
                            "enable": true,
                            "scale": 0.5,
                            "type": "inline",
                            "nb_sides": "3",
                            "move": {
                                "radius": 20
                            },

                            "inline": {
                                "arrangement": "random-point"
                            },
                            "draw": {
                                "enable": true,
                                "stroke": {
                                    "width": "3",
                                    "color": "#730C94"
                                }
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": false,
                                }
                            },

                        },
                        "move": {
                            "speed": 2
                        },
                    }}
                />
            </div>
            <div className="section-home-skills">
                    <CarouselSkills/>
            </div>

        </div>
    )
}

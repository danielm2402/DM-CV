import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Information from '../../components/generalInformation/Information'
import CarouselSkills from '../../components/skills/Skills'
import CarouselTechnologies from '../../components/technologies/Technologies'
import useWindowSize from '../../hooks/useWindowSize'
import Particles from 'react-particles-js';
import './Home.css'


export default function Home() {
    const size = useWindowSize();
    const [animatedSkills, setAnimatedSkills] = useState(false)
    const [animatedNavbar, setAnimatedNavbar] = useState(false)
    useEffect(() => {
        document.addEventListener('scroll', trackScrolling, true);
    }, [])

    const trackScrolling = (e) => {
        console.log(e)
        console.log(e.target.scrollingElement.scrollTop)
        console.log(e.target.scrollingElement.clientHeight)
        const scrollTop = Math.round(e.target.scrollingElement.scrollTop);
        const clienHeight = Math.round(e.target.scrollingElement.clientHeight);
        const skills = (scrollTop > clienHeight - (clienHeight / 2)); //CALCULAR
        const navbar = (scrollTop >= clienHeight-60 && scrollTop < clienHeight * 2)
        if (skills)
            setAnimatedSkills(true)
        else
            setAnimatedSkills(false)

        if (navbar)
            setAnimatedNavbar(true)
        else
            setAnimatedNavbar(false)

    };
    return (
        <div className="section-home-page">
            <div className="section-home-header">
                <Header animated={animatedNavbar} />
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
                <CarouselSkills animated={animatedSkills} />
            </div>
            <div className="section-home-technologies">
                    <CarouselTechnologies/>
            </div>

        </div>
    )
}

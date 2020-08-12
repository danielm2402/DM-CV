import React from 'react'
import Header from '../../components/header/Header'
import useWidowSize from '../'
import Particles from 'react-particles-js';
import './Home.css'


export default function Home() {
    return (
        <div className="section-home-page">
            <Header />
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 2
                        },
                        "color": {
                            "value": '#730C94'
                        },
                        "line_linked": {
                            "color": "#D487BA"
                        }


                    },
                    "polygon": {
                        "enable": true,
                        "scale": 0.5,
                        "type": "inline",
                        "move": {
                            "radius": 10
                        },

                        "inline": {
                            "arrangement": "equidistant"
                        },
                        "draw": {
                            "enable": true,
                            "stroke": {
                                "color": "#730C94"
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": false,
                            }
                        }
                    },
                    "move": {
                        "speed": 4
                    },
                }}
            />
        </div>
    )
}

import React from 'react'
import './Projects.css'
import Card from './Card'
import prestalana from '../../img/works/prestalana.png'
import seiz1 from '../../img/works/seiz1.jpeg'
import seiz2 from '../../img/works/seiz2.jpeg'
import seiz3 from '../../img/works/seiz3.jpeg'
import orion from '../../img/works/orionapp.png'
import orion2 from '../../img/works/orionapp.jpeg'
import primal from '../../img/works/primal.png'
import fitgo from '../../img/works/fitgo1.jpeg'
import tripcost from '../../img/works/tripcost.jpeg'

export default function Projects() {
    return (
        <div className="container-projects">
            <div className="section-projects">
                <Card image={prestalana} title="Multiapoyo" description="Desarrollador frontend" technologies="ReactJS, Redux, Css, Redux-saga, Firebase, Typescript, Bootstrap, MaterialUI"  />
                <Card image={seiz2} title="Seiz core" description="Desarrollador frontend" technologies="ReactJS, Redux, Redux-saga, Css, MaterialUI, Bootstrap, Canvas"  />
                <Card image={seiz3} title="Seiz Judicatura " description="Desarrollador frontend" technologies="ReactJS, Redux, Saga, Css, MaterialUI, Bootstrap, Canvas"  />
                <Card image={seiz1} title="Seiz Reval" description="Desarrollador frontend" technologies="ReactJS, Redux, Saga, Css, MaterialUI, Bootstrap, Canvas"  />
                <Card image={orion} title="Orion Reality" description="Desarrollador frontend" technologies="ReactJS, Redux, Saga, Css, MaterialUI, Firebase"  />
                <Card image={primal} title="Primal MKT" description="Desarrollador frontend" technologies="ReactJS, Redux, Saga, Css, Firebase"  />
                <Card image={orion2} mobile={true} title="Orion app (2)" description="Desarrollador frontend" technologies="ReactNative, Redux, Saga, Webrtc, Firebase, Implementaciones nativas, Reconocimiento facial"  />
                <Card image={tripcost} title="Tripcost" description="Desarrollador fullstack" technologies="ReactJS, Context, Thunk, TailwindCss"  />
                <Card image={fitgo} mobile={true} title="FitGo" description="Desarrollador fullstack" technologies="Kotlin, Firebase, NodeJS, Geolocalización, Google maps"  />

            </div>
        </div>
    )
}

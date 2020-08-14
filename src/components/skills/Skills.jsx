import React, { useEffect } from 'react'

import { FaFileCode, FaMobileAlt, FaAndroid, FaServer } from 'react-icons/fa'
import './Skills.css'

export default function Skills({animated}) {

    return (

        <div className={animated?"container-skills-fadein":"container-skills-fadeout"}>
            <div className="section-skills">
                <div className="skill-column">
                    <div className="item-column-skill">
                        <div className="resplandor"><FaFileCode color="#fff" size="4rem" /></div>
                        <p> Desarrollo web frontend ReactJS</p>
                    </div>
                    <div className="item-column-skill">
                    <div className="resplandor"><FaMobileAlt color="#fff" size="4rem" /></div>
                        <p>Desarrollo móvil ReactNative</p>
                    </div>
                </div>
                <div className="skill-column">
                    <div className="item-column-skill">
                    <div className="resplandor">  <FaAndroid color="#fff" size="4rem" /></div>
                        <p>Desarrollo móvil nativo Android</p>
                    </div>
                    <div className="item-column-skill">
                    <div className="resplandor">  <FaServer color="#fff" size="4rem" /></div>
                        <p>Desarrollo backend (NodeJS, Golang)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

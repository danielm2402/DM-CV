import React, { useState } from 'react'
import './Card.css'
export default function Card({ image, title, description, technologies, mobile }) {
    const [getInformation, setInformation] = useState(false)

    return (
        <div onMouseEnter={() => setInformation(true)} onMouseLeave={() => setInformation(false)} className="container-card">
            <div className="section-image">
                <img style={mobile?{width:'40%', height:'100%'}:{}} src={image} />
                <div className={getInformation ? "section-information-techologies" : "section-information-techologies-leave"}>
                    <p>{technologies}</p>
                </div>
            </div>
            <div className="section-title">
                <h4>{title}</h4>
                <h5>{description}</h5>
            </div>
        </div>
    )
}

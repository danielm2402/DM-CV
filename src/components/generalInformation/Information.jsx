import React from 'react'
import './Information.css'
import Me from '../../img/me4re.jpg'
export default function Information() {
    return (
        <div className="container-information">
            <div className="section-photo">
                <div className="frame">
                    <img src={Me}></img>
                </div>
            </div>
            <div className="section-description">
                <h2>Daniel Alejandro Muñoz</h2>
                <h3>Desarrollador Front-End & Móvil</h3>
                <p>¡Hola! Soy Daniel, un desarrollador FrontEnd con más de 3 años de experiencia. Amante de las matemáticas, la ciencia y la tecnología. He tenido la fortuna de trabajar con diversos equipos y empresas, me encanta proponer y discutir soluciones tecnologicas. </p>
                <p>Un poco geek, pero cuento con grandes capacidades comunicativas, académicas y de autoaprendizaje. Fan del software libre, las arquitecturas de software y de compartir el conocimiento. </p>
            </div>
        </div>
    )
}

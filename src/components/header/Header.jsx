import React from 'react'
import './Header.css'
export default function Header({animated}) {
    return (
        <div className={animated?"section-header-animated":"section-header-normal"}>
            <ul>
                <li><a href="# ">Inicio</a></li>
                <li><a href="# ">Habilidades</a></li>
                <li><a href="# ">Tecnologías</a></li>
                <li><a href="# ">Proyectos</a></li>
                <li><a href="# ">Contacto</a></li>
            </ul>

        </div>
    )
}

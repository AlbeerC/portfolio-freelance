import './About.scss'
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaSass } from 'react-icons/fa'
import { SiTypescript, SiFirebase, SiTailwindcss, SiReact } from "react-icons/si";
import { LuFigma } from "react-icons/lu";
import { IoLogoJavascript } from "react-icons/io";
import Services from '../Services/Services';

function About () {

    return (
        <section className="about" id='aboutme'>
            <h2 className='section-title'>Sobre mi</h2>
            <p className='text'>Mi nombre es Alberto Caminos, tengo 21 años y soy de Argentina. Desarrollo sitios web y aplicaciones móviles que combinan funcionalidad con diseño intuitivo, buscando crear experiencias de usuario fáciles de usar para cualquier persona. Veo cada proyecto como una oportunidad para seguir mejorando y crear productos que realmente marquen la diferencia.</p>
            <h3 className='services-title'>Servicios</h3>
            <Services />
        </section>
    )
}

export default About
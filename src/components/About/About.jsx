import './About.scss'
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaSass } from 'react-icons/fa'
import { SiTypescript, SiFirebase, SiTailwindcss, SiReact } from "react-icons/si";
import { LuFigma } from "react-icons/lu";
import { IoLogoJavascript } from "react-icons/io";
import Services from '../Services/Services';
import face from '../../assets/foto-cv.jpeg'
import Socials from '../Socials/Socials'

function About () {

    return (
        <section className="about" id='aboutme'>
            <div className="left">
                <img src={face} alt="me" />
            </div>
            <div className="right">
                <h2 className='section-title'>Sobre mi</h2>
                <p className='text'>Soy Alberto Caminos, un desarrollador web argentino con una gran pasión por crear sitios web que ayuden a los negocios a destacarse en línea, priorizando un diseño intuitivo y una experiencia de usuario fácil de usar para cualquier persona. Aunque estoy iniciando mi carrera como freelancer, estoy comprometido a ofrecer soluciones personalizadas y de calidad que respondan a las necesidades específicas de cada proyecto.</p>
                <Socials />
            </div>

        </section>
    )
}

export default About
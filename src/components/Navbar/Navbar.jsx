import './Navbar.scss'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar () {
    const [showMenu, setShowMenu] = useState(false)

    const handleToggle = () => {
        setShowMenu(!showMenu)
    }

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <header>
            <div className="nav-mobile">
                <Link to='/' onClick={handleScrollToTop}><h1>Mi portfolio</h1></Link>
                <button onClick={handleToggle}><FaBars className='hide toggle'/></button>
            </div>
            <nav className={showMenu ? 'show' : 'hide'}>
                <ul>
                    <li><a href='/#home' className='active'>Inicio</a></li>
                    <li><a href='/#aboutme'>Sobre mi</a></li>
                    <li><a href='/#projects'>Proyectos</a></li>
                    <li><a href='/#contact'>Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
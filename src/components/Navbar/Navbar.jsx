import './Navbar.scss'
import { FaBars } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../assets/logo-freelance.png'

function Navbar () {
    const [showMenu, setShowMenu] = useState(false)

    const handleToggle = () => {
        setShowMenu(!showMenu)
    }

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <header>
            <div className="nav-mobile">
                <Link to='/' onClick={handleScrollToTop}><img src={logo} /></Link>
                <button onClick={handleToggle}><FaBars className='hide toggle'/></button>
            </div>
            <nav className={showMenu ? 'show' : 'hide'}>
                <ul>
                    <li><a href='/#home' className='active'>Inicio</a></li>
                    <li><Link to="/precios">Servicios y precios</Link></li>
                    <li><Link to="/proceso">Proceso</Link></li>
                    <li><a href='/#contact'>Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
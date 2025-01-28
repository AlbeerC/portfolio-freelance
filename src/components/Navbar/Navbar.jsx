import './Navbar.scss'
import { FaBars } from "react-icons/fa"
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from '../../assets/logo-freelance.png'

function Navbar () {
    const [showMenu, setShowMenu] = useState(false)
    const navigate = useNavigate()

    const handleToggle = () => {
        setShowMenu(!showMenu)
    }

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setShowMenu(false)
    }

    return (
        <header>
            <div className="nav-mobile">
                <Link to='/' onClick={handleScrollToTop}><img src={logo} /></Link>
                <button onClick={handleToggle}><FaBars className='hide toggle'/></button>
            </div>
            <nav className={showMenu ? 'show' : 'hide'}>
                <ul>
                    <li><a href='/#home' className='active' onClick={handleScrollToTop}>Inicio</a></li>
                    <li><Link to="/precios" onClick={handleScrollToTop}>Precios</Link></li>
                    <li><Link to="/proceso" onClick={handleScrollToTop}>Proceso</Link></li>
                    <li><a href='/#contact' onClick={handleScrollToTop}>Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
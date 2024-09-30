import './Hero.scss'
import gif from '../../assets/gif-hero.gif'
import desktop from '../../assets/img-hero.png'
import Socials from '../Socials/Socials'
import scrollDown from '../../assets/scrolldown.gif'

function Hero () {

    return (
        <section className="hero" id='home'>
            <article className="left">
                <div className="top">
                    <div className="titles">
                        <h3>Hola, soy</h3>
                        <h2>Alberto Caminos</h2>
                    </div>
                    <img src={gif} alt="gif of a man thinking in front a pc" />
                </div>
                <div className="bottom">
                    <h4>Desarrollador Web y Móvil</h4>
                    <button><a href='#projects'>Ver proyectos</a></button>
                </div>
            </article>

            <article className="right">
                <img src={desktop} alt="screnshot of one of my projects" />
            </article>
            
            <Socials />
            <img src={scrollDown} className='scroll-down' alt="animation scroll down gif" />
        </section>
    )
}

export default Hero
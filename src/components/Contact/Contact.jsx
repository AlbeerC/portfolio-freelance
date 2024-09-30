import './Contact.scss'
import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

function Contact () {

    return (
        <section className="contact" id='contact'>
            <h2 className='section-title'>Contactame</h2>
            <h3>Transformando ideas en realidad: comencemos a colaborar.</h3>
            <div className="cards">
                <div className="card">
                    <FaSquareXTwitter />
                    <h4>X</h4>
                    <p>AlberCaminos03</p>
                </div>
                <div className="card">
                    <FaEnvelope />
                    <h4>E-mail</h4>
                    <p>caminosalbertodev@gmail.com</p>
                </div>
                <div className="card">
                    <FaWhatsapp />
                    <h4>Whatsapp</h4>
                    <p>+54 2284697534</p>
                </div>
            </div>
        </section>
    )
}

export default Contact
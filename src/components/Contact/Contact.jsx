import './Contact.scss'
import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

function Contact () {

    return (
        <section className="contact" id='contact'>
{/*             
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
            </div> */}

            <h2 className='section-title'>Contactame</h2>
            <article className="flex">
                <form action="">
                    <div className="field">
                        <label htmlFor="">Nombre</label>
                        <input type="text" placeholder='Tu nombre'/>
                    </div>
                    <div className="field">
                        <label htmlFor="">E-mail</label>
                        <input type="email" placeholder='tuemail@gmail.com'/>
                    </div>
                    <div className="field">
                        <label htmlFor="">Mensaje</label>
                        <textarea name="" id="" placeholder='Tu mensaje'></textarea>
                    </div>

                    <button type='submit'>Enviar</button>
                </form>

                <div className="contact-info">
                    <div className="cont">
                    <span>E-mail</span>
                    <p><a href="mailto:caminosalbertodev@gmail.com" target='blank'>caminosalbertodev@gmail.com</a></p>
                    </div>
                    <div className="cont">
                        <span>Whatsapp</span>
                        <p><a href="https://api.whatsapp.com/send?phone=2284697534" target='blank'>2284-697534</a></p>
                    </div>
                    <div className="cont">
                        <span>Twitter</span>
                        <p><a href="https://x.com/AlberCaminos03" target='blank'>AlberCaminos03</a></p>
                    </div>
                    <div className="cont">
                        <span>Linkedin</span>
                        <p><a href="https://www.linkedin.com/in/alberto-caminos/" target='blank'>Alberto Caminos</a></p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Contact
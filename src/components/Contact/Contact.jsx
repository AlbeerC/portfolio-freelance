import './Contact.scss'
import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { useState } from 'react'

function Contact () {

    return (
        <section className="contact" id='contact'>
            <h2 className='section-title'>Contactame</h2>
            <article className="flex">
                <form action='https://formspree.io/f/mbldljzz' method='POST'>
                    <div className="field">
                        <label htmlFor="">Nombre</label>
                        <input type="text" name='name' placeholder='Tu nombre' required/>
                    </div>
                    <div className="field">
                        <label htmlFor="">E-mail</label>
                        <input type="email" name='email' placeholder='tuemail@gmail.com' required/>
                    </div>
                    <div className="field">
                        <label htmlFor="">Mensaje</label>
                        <textarea name="message" id="" placeholder='Tu mensaje' required></textarea>
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
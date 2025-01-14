import './Socials.scss'
import { FaLinkedin, FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

function Socials () {

    return (
        <div className="socials">
            <ul>
                <li><a href="https://api.whatsapp.com/send?phone=2284697534" target='blank'><FaWhatsapp /></a></li>
                <li><a href="mailto:caminosalbertodev@gmail.com" target='blank'><FaEnvelope /></a></li>
                <li><a href="https://x.com/AlberCaminos03" target='blank'><FaSquareXTwitter /></a></li>
                <li><a href="" target='blank'><FaInstagram /></a></li>
            </ul>
        </div>
    )

}

export default Socials
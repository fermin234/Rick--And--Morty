import { Link } from "react-router-dom";
import s from './landingPage.module.css'
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsappSquare, FaGithubSquare } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { ImMail } from "react-icons/im";

export default function landingPage() {
  return (
    <div className={s.containerAll}>
      <div className={s.container}>
        <Link to="/home" className={s.container}>
          <div className={s.neon}>Rick </div>
          <div className={s.flux}>& </div>
          <div className={s.neon}>Morty </div>
        </Link >
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "10px", height: "60px", position: "absolute", bottom: "40px", left: "50px", padding: " 0 10px", borderRadius: "15px" }} className={s.redes}>
        <div>
          <a href="https://github.com/fermin234" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare size="50px" />
          </a>
        </div>
        <div>
          <a href="https://wa.me/2473400240?text=Hola%20Fermín!" target="_blank" rel="noopener noreferrer">
            <FaWhatsappSquare size="50px" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/fermin-solaberrieta/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin size="44px" />
          </a>
        </div>
        <div>
          <a rel="noreferrer" target="_blank" href="mailto:fermin234@hotmail.com">
            <ImMail size="44px" />
          </a>
        </div>
      </div>
    </div>
  )
}
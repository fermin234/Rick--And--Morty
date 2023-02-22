import { Link } from "react-router-dom";
import s from './navbar.module.css'


export default function NavBar() {
  return (
    <div className={s.containerAll}>
      <div>
        <Link to="/landingPage">
          <button className={s.buttonNavBar}>landingPage</button>
        </Link>
      </div>
      <div>
        <Link to="/home">
          <button className={s.buttonNavBar}>Home</button>
        </Link>
      </div>
    </div >
  )
}
import { Link } from "react-router-dom";

export default function landingPage() {
  return (<>
    <h1>LandingPAGE</h1>
    <Link to="/home">
      <button>Home</button>
    </Link>
  </>)
}
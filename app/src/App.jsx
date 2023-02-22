import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import landingPage from "./components/LandingPage/LandingPage";
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/landingPage" component={landingPage} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App
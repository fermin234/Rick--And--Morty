import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import landingPage from "./components/LandingPage/LandingPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { characters } from "./redux/actions";

function App() {
  const dispactch = useDispatch()
  const allCharacter = useSelector(s => s.characters)

  useEffect(() => {
    //-----Si no hay personajes los pido-----
    if (!allCharacter.length) {
      dispactch(characters())
    }
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/landingPage" component={landingPage} />
        {/* <Route path="/" component={Home} /> */}
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App
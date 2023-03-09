import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import landingPage from "./components/LandingPage/LandingPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { characters, getSpecies } from "./redux/actions";
import FormCreate from "./components/FormCreate/FormCreate";

function App() {
  const dispactch = useDispatch()
  const allCharacter = useSelector(s => s.characters)
  const species = useSelector(s => s.species)

  useEffect(() => {
    //-----Si no hay personajes, los pido-----
    if (!allCharacter.length) {
      dispactch(characters())
    }
  }, [])

  useEffect(() => {
    //-----Si no hay especies, las pido-----
    if (!species.length) {
      dispactch(getSpecies())
    }
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={landingPage} />
        <Route exact path="/create" component={FormCreate} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App
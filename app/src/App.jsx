import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import landingPage from "./components/LandingPage/LandingPage";
import FormCreate from "./components/FormCreate/FormCreate";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { characters, getOrigin, getSpecies, getTypes } from "./redux/actions";

function App() {

  const dispatch = useDispatch()
  const allCharacter = useSelector(s => s.characters)
  const species = useSelector(s => s.species)
  const origin = useSelector(s => s.origin)
  const types = useSelector(s => s.types)

  useEffect(() => {
    //-----Si no hay personajes, los pido-----
    if (!allCharacter.length) {
      dispatch(characters())
    }
  }, [])

  useEffect(() => {
    //-----Si no hay especies, las pido-----
    if (!species.length) {
      dispatch(getSpecies())
    }
  }, [])

  useEffect(() => {
    //-----Si no hay tipos, las pido-----
    if (!types.length) {
      dispatch(getTypes())
    }
  }, [])

  useEffect(() => {
    //-----Si no hay origenes, las pido-----
    if (!origin.length) {
      dispatch(getOrigin())
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
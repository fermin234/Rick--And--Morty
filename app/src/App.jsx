import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import landingPage from "./components/LandingPage/LandingPage";
import FormCreate from "./components/FormCreate/FormCreate";

function App() {

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
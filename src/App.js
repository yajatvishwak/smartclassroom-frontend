import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Submission from "./pages/Submission";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/submission" exact>
            <Submission></Submission>
          </Route>
          <Route path="/" exact>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

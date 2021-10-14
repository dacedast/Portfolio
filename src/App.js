import "./App.css";
import Home from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Works from "./components/Works";
import Blog from "./components/Blog";
import NotFound from "./components/NotFoundPage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/works" component={Works} />
          <Route exact path="/blog" component={Blog} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

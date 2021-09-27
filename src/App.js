import {BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom";
import Home from './component/pages/Home';
import Platforms from "./component/pages/Platforms";
import Products from "./component/pages/Products";
import Support from "./component/pages/Support";
import About from "./component/pages/About";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/platforms" exact component={Platforms} />
      <Route path="/products" exact component={Products} />
      <Route path="/support" exact component={Support} />
      <Route path="/about" exact component={About} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;

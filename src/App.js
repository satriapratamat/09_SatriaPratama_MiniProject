import {BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom";
import Home from './component/pages/Home';
import Platforms from "./component/pages/Platforms";
import Products from "./component/pages/Products";
import Support from "./component/pages/Support";
import About from "./component/pages/About";
import Details from "./component/pages/Details";
import Signup from "./component/pages/components/User/SignUp";
// import { AuthProvider } from "./contexts/AuthContext";
import Login from "./component/pages/components/User/Login";

function App() {
  return (
      <BrowserRouter>
        {/* <AuthProvider> */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login}/>
            <Route path="/platforms" exact component={Platforms} />
            <Route path="/products" exact component={Products} />
            <Route path="/support" exact component={Support} />
            <Route path="/about" exact component={About} />
            <Route path="/products/details/:id" exact component={Details} />
          </Switch>
        {/* </AuthProvider> */}
      </BrowserRouter>
  );
}

export default App;

import {BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom";
import Home from './component/pages/Home';
import Platforms from "./component/pages/Platforms";
import Products from "./component/pages/Products";
import Support from "./component/pages/Support";
import About from "./component/pages/About";
import Details from "./component/pages/Details";
import SignUp from "./component/pages/SignUp";
// import { AuthProvider } from "./contexts/AuthContext";
import Login from "./component/pages/Login";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
      <BrowserRouter>
        <Auth0Provider domain="dev-f5chdl6a.jp.auth0.com"
    clientId="K9MSsrHvgSsVm1scOHNiTXyuzRIq3JxJ"
    redirectUri={window.location.origin}>
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/signup" exact component={SignUp} />
            <Route path="/login" exact component={Login}/> */}
            <Route path="/platforms" exact component={Platforms} />
            <Route path="/products" exact component={Products} />
            <Route path="/support" exact component={Support} />
            <Route path="/about" exact component={About} />
            <Route path="/products/details/:id" exact component={Details} />
          </Switch>
        </Auth0Provider>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;

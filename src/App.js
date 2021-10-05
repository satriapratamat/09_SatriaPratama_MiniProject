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
import { store } from "./store/store"
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <AuthProvider> */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login" exact component={Login}/>
            <Route path="/platforms" exact component={Platforms} />
            <Route path="/products" exact component={Products} />
            <Route path="/support" exact component={Support} />
            <Route path="/about" exact component={About} />
            <Route path="/products/details/:id" exact component={Details} />
          </Switch>
        {/* </AuthProvider> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;

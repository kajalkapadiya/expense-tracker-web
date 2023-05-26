import { useContext } from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./component/pages/Home";
import Product from "./component/pages/Product";
import MainHeader from "./component/auth/MainHeader";
import Login from "./component/pages/Login";
import About from "./component/pages/About";
import AuthContext from "./component/auth/AuthContext";
import Profile from "./component/pages/Profile";
import ForgotPass from "./component/pages/ForgotPass";

function App() {
  const authCntx = useContext(AuthContext);
  console.log(authCntx.isLoggedIn);
  return (
    <>
      <MainHeader />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          {authCntx.isLoggedIn && <Home />}
          {!authCntx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/product">
          {authCntx.isLoggedIn && <Product />}
          {!authCntx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/about">
          {authCntx.isLoggedIn && <About />}
          {!authCntx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/forgot">
          <ForgotPass />
        </Route>
      </Switch>
    </>
  );
}

export default App;

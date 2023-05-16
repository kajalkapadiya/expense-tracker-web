// import { useContext } from "react";
import "./App.css";
// import { Redirect, Route, Switch } from "react-router-dom";
// import Home from "./component/pages/Home";
// import Product from "./component/pages/Product";
import MainHeader from "./component/auth/MainHeader";
import Login from "./component/pages/Login";
// import About from "./component/pages/About";
// import AuthContext from "./component/auth/AuthContext";

function App() {
  // const authCntx = useContext(AuthContext);
  // const loggedIn = authCntx.isLoggedIn;
  return (
    <>
      <MainHeader />
      <Login />
      {/* <Switch>
        <Route path="/" exact>
          {loggedIn && <Redirect to="/home" />}
        </Route>
        <Route path="/home">{loggedIn && <Home />}</Route>
        <Route path="/product">{loggedIn && <Product />}</Route>
        <Route path="/about">{loggedIn && <About />}</Route>
        <Route path="/login">{loggedIn && <Login />}</Route>
      </Switch> */}
    </>
  );
}

export default App;

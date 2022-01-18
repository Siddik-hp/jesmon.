import React from "react";
import Footer from "./Components/Footer";
import { Switch, Route } from "react-router-dom";
// import all pages form Pages and Components folders
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  AOS.init();
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/home";
import ChiSiamo from "./pages/chisiamo";
import Contatto from "./pages/contatto";

import "./styles.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="body-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chisiamo" component={ChiSiamo} />
          <Route path="/contatto" component={Contatto} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;

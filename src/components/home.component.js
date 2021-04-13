import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { withRouter } from "react-router";

import Header from "./header.component";

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>

        <div className="container mt-3">
          <h2>Bienvenido a Mega-Parodia :D</h2>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);

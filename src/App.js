import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import FixedMenuLayout from "./design/Layout";
import history from "./Routes/history";
import HomepageLayout from "./HomePage";
import RegisterCompany from "./sign in/RegisterCompany";
import Tenants from "./Super Admin/tenants";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router history={history}>
        <div className="routes">
          <Switch>
            {/* <Route path="/" component={Tenants} /> */}
            {/* <Route exact path="/" component={HomepageLayout} /> */}
            {/* <FixedMenuLayout /> */}
            <Tenants />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

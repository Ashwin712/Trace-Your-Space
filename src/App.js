import React, { Component } from "react";
import { Link, Route, Router, Switch } from "react-router-dom";
import history from "./Routes/history";
import FixedMenuLayout from "./design/Layout"
import Tenants from "./Super Admin/Tenants";
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
            <Route exact path="/" component={Tenants} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;

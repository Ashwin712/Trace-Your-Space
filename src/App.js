import React, { Component } from "react";
import { Router, Switch } from "react-router-dom";
import FixedMenuLayout from "./design/Layout";
import history from "./Routes/history";


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
            <FixedMenuLayout />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;

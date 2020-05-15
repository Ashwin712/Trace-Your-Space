import React, { Component } from "react";
import { Link, Route, Router, Switch } from "react-router-dom";
import history from "./Routes/history";
import FixedMenuLayout from "./design/Layout"
import booking from "./Booking/booking";
import CardExampleGroupProps from "./UpcomingEvents/upcomingEvents";
import HomepageLayout from "./HomePage";
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
            <FixedMenuLayout />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;

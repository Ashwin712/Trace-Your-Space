import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../Routes/history";

import ErrorBoundary from "../Error Boundary/ErrorBoundary"

import CardExampleGroupProps from "../UpcomingEvents/upcomingEvents"
import booking from "../Booking/booking";
import Tenants from "../Super Admin/tenants";

export default class ContentSection extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/tenants" component={Tenants} />
              <Route path="/" component={booking} />
              <Route path="/upcomingEvents" component={CardExampleGroupProps} />
            </Switch>



          </div>
        </Router>
      </ErrorBoundary>
    );
  }
}
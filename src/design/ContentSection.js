import React, { Component } from "react";
import { Router, Route } from "react-router-dom";

import history from "../Routes/history";

import ErrorBoundary from "../Error Boundary/ErrorBoundary"

import CardExampleGroupProps from "../UpcomingEvents/upcomingEvents"
import booking from "../Booking/booking";

export default class ContentSection extends Component {
  render() {
    return (
      <ErrorBoundary>
      <Router history={history}>
       <div>
            
            <Route path = "/upcomingEvents" component = {CardExampleGroupProps}/>   
            <Route path = "/" component={booking}/>   
      </div>
      </Router>
      </ErrorBoundary> 
    );
  }
}
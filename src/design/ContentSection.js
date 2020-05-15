import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../Routes/history";

import ErrorBoundary from "../Error Boundary/ErrorBoundary"

import CardExampleGroupProps from "../UpcomingEvents/upcomingEvents"
import booking from "../Booking/booking";
import Date_Selector from "../Booking/intial";
import FilterSelector from "../Booking/filters";
import NewRoom from "../Admin/NewRoom";
import RoomView from "../user/RoomView";
import Tenants from "../Super Admin/tenants"
export default class ContentSection extends Component {
  render() {
    return (
      <ErrorBoundary>
      <Router history={history}>
       <div>
       <Route path = "/Filters" component={FilterSelector}/>
       <Route path = "/upcomingEvents" component = {CardExampleGroupProps}/>   
       <Route path="/tenants" component={Tenants} />
       <Route exact path = "/" component={Date_Selector}/>  
      </div>
      </Router>
        <Router history={history}>
          <div>
            <NewRoom />
            <RoomView />
          </div>
        </Router>
      </ErrorBoundary>
    );
  }
}

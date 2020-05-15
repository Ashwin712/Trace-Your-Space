import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import NewRoom from "../Admin/NewRoom";
import FilterSelector from "../Booking/filters";
import Date_Selector from "../Booking/intial";
import ErrorBoundary from "../Error Boundary/ErrorBoundary";
import history from "../Routes/history";
import Tenants from "../Super Admin/tenants";
import CardExampleGroupProps from "../UpcomingEvents/upcomingEvents";
import RoomView from "../user/RoomView";
import admin from "../Admin/admin";
import booking from "../Booking/booking";

export default class ContentSection extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Router history={history}>
          <div>
            <Route path="/Filters" component={FilterSelector} />
            <Route path="/upcomingEvents" component={CardExampleGroupProps} />
            <Route path="/tenants" component={Tenants} />
            <Route path="/NewRoom" component={NewRoom} />
            <Route path="/RoomView" component={RoomView} />
            <Route path="/SelectDate" component={Date_Selector} />
            <Route path="/booking" component={booking} />
            <Route path="/admin" component={admin} />
          </div>
        </Router>
      </ErrorBoundary>
    );
  }
}

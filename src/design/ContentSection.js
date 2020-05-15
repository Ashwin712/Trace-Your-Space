import React, { Component } from "react";
import { Router, Route } from "react-router-dom";

import history from "../Routes/history";

import ErrorBoundary from "../Error Boundary/ErrorBoundary"

import CardExampleGroupProps from "../UpcomingEvents/upcomingEvents"
import booking from "../Booking/booking";
import Date_Selector from "../Booking/intial";
import FilterSelector from "../Booking/filters";


export default class ContentSection extends Component {
  render() {
    return (
      <ErrorBoundary>
      <Router history={history}>
       <div>
       <Route exact path = "/" component={Date_Selector}/>  
       <Route path = "/Filters" component={FilterSelector}/>
       <Route path = "/upcomingEvents" component = {CardExampleGroupProps}/>   
            
           
      </div>
      </Router>
      </ErrorBoundary> 
    );
  }
}
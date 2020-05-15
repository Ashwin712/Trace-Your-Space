import React, { Component } from "react";
import { Router } from "react-router-dom";

import history from "../Routes/history";

import ErrorBoundary from "../Error Boundary/ErrorBoundary"


export default class ContentSection extends Component {
  render() {
    return (
      <ErrorBoundary>
      <Router history={history}>
       <div>
             <h1>create your files and put it here</h1>
      </div>
      </Router>
      </ErrorBoundary> 
    );
  }
}
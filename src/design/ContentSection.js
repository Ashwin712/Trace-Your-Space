import React, { Component } from "react";
import { Router } from "react-router-dom";
import NewRoom from "../Admin/NewRoom";
import ErrorBoundary from "../Error Boundary/ErrorBoundary";
import history from "../Routes/history";
import RoomView from "../user/RoomView";

export default class ContentSection extends Component {
  render() {
    return (
      <ErrorBoundary>
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

import React, { Component } from "react";
import { Link, Route, Router, Switch } from "react-router-dom";
import history from "./Routes/history" ;
import FixedMenuLayout from "./design/Layout"
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
            <Route exact path="/" component={FixedMenuLayout} />
          </Switch>
        </div>
      </Router>
    
    );
  }
}

export default App;

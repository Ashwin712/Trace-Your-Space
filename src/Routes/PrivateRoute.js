import React from "react";
import { Route } from "react-router-dom";
import { isSignedIn } from "../../shared/storage/Storage";
//import Googlesso from "../Signin/googlesso";


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      isSignedIn().then(function (res) {
        if (res === false)
          window.location.href = "http://localhost:3000/";

        return <Component {...props} />;
      })

      return <Component {...props} />;



      // authorised so return component

    }}
  />
);
export default PrivateRoute;

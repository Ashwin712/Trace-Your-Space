import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../../shared/assets/PageNotFound.jpg";
const NotFound = () => (
  <>
    <img
      src={PageNotFound}
      alt="error_image"
      className="page_not_found"
    />
    <center>
      <Link to="/">Return to Home Page</Link>
    </center>
  </>
);
export default NotFound;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { GoogleLogin } from "react-google-login";
import { Button } from "semantic-ui-react";

class GoogleSignIn extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };
  responseGoogle = (response) => {};
  componentDidMount() {
    console.log("loader", this.props.loader);
  }
  render() {
    return (
      <GoogleLogin
        clientId="795227148634-cc9v73mrg55mi1d2a0rt56rd85ff7iin.apps.googleusercontent.com"
        render={(renderProps) => (
          <Button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="googleBtn"
          >
            Sign In with Google
          </Button>
        )}
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={"single_host_origin"}
        // isSignedIn={false}
      />
    );
  }
}
export default GoogleSignIn;

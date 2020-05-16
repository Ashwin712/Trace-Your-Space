import React, { Component } from "react";
import PropTypes from "prop-types";
import { GoogleLogin } from "react-google-login";
import { Button } from "semantic-ui-react";
import { googleSignIn } from "../shared/service/Services";
import history from "../Routes/history";

class GoogleSignIn extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };
  responseGoogle = (response) => {
    console.log("response", response);
    googleSignIn({
      deviceTokens: null,
      googleIdToken: response.tokenId,
    }).then((res) => {
      console.log(res);
      if (res.status === 200 || 301 || 417) {
        console.log("res", res);
        history.push({ pathname: "/Layout", role: res });
      } else {
        console.log("error");
      }
    });
  };
  componentDidMount() {
    console.log("loader", this.props.loader);
  }
  render() {
    return (
      <GoogleLogin
        clientId="732271319677-4u1b07lekeq446l1lsujq8uhcai92km8.apps.googleusercontent.com"
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

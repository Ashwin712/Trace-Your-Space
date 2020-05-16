import PropTypes from "prop-types";
import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import {
  googleSignInApiResponse,
  googleSignInResponseAction,
} from "../Redux/actions/googlesigninActions";
import history from "../Routes/history";
import { googleSignIn } from "../shared/service/Services";
import { onSignIn, setRefreshToken } from "../shared/storage/Storage";

class GoogleSignIn extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };
  responseGoogle = (response) => {
    console.log("response", response);
    this.props.googleSignInResponseAction(response);
    googleSignIn({
      deviceTokens: null,
      googleIdToken: response.tokenId,
    }).then((res) => {
      if (res.status === 200) {
        console.log("res", res);
        this.props.googleSignInApiResponse(res);
        onSignIn(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        history.push("/Layout");
      } else if (res.status === 301) {
        this.props.googleSignInApiResponse(res);
        history.push("/Layout");
      } else if (res.status === 417) {
        this.props.googleSignInApiResponse(res);
        history.push("/Layout");
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
export const mapStateToProps = (state) => ({
  googlesignin: state.googlesignin,
});
export default connect(mapStateToProps, {
  googleSignInResponseAction,
  googleSignInApiResponse,
})(GoogleSignIn);

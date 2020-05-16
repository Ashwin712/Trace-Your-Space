import React, { Component, useCallback } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import { RegisterTenant } from "../shared/service/Services";
import history from "../Routes/history"
class RegisterCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenantName: "",
      domain: "",
      adminName: "",
      emailId: "",
      phoneNo: "",
      adminNameError: false,
      tenantNameError: false,
      domainError: false,
      emailError: false,
      phoneNoError: false,
      formError: false,
      loading: false,
    };
  }
  handleChange_adminName = async (e) => {
    if (e.target.value !== "") {
      await this.setState({ adminName: e.target.value, adminNameError: false });
    } else await this.setState({ adminName: "", adminNameError: true });
  };

  handleChange_companyName = async (e) => {
    if (e.target.value !== "") {
      await this.setState({
        tenantName: e.target.value,
        tenantNameError: false,
      });
    } else await this.setState({ tenantName: "", tenantNameError: true });
  };

  handleChange_domain = async (e) => {
    e.target.value
      ? await this.setState({ domain: e.target.value, domainError: false })
      : await this.setState({ domain: "", domainError: true });
  };

  handleChange_emailId = async (e) => {
    e.target.value
      ? await this.setState({ emailId: e.target.value, emailError: false })
      : await this.setState({ emailId: "", emailError: true });
    // if (this.isEmail(e.target.value)) {
    //   await this.setState(
    //     { emailError: false, errorText: "", emailId: e.target.value },
    //     () => {
    //       if (this.isValidDomain(e.target.value)) {
    //         useCallback(
    //           "Entered email doesnot match with the domain of organisation"
    //         );
    //       } else {
    //         this.setState({
    //           emailError: true,
    //           emailId: "",
    //         });
    //       }
    //     }
    //   );
    // } else {
    //   await this.setState({ emailError: true, emailId: "" });
    // }
  };

  isValidDomain = (email) => {
    let domainCheck = "@" + this.state.domain + ".";
    return email.includes(domainCheck);
  };

  isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };
  handleChange_phoneNo = (e) => {
    if (e.target.value && e.target.value.length !== 10) {
      this.setState({ phoneNoError: true, phoneNo: e.target.value });
    } else if (e.target.value && e.target.value.length === 10) {
      this.setState({ phoneNoError: false, phoneNo: e.target.value });
    } else {
      this.setState({ phoneNoError: true, phoneNo: "" });
    }
  };

  handleSubmit = (e) => {
    const {
      emailError,
      domainError,
      tenantNameError,
      adminNameError,
      phoneNoError,
    } = this.state;
    this.setState({ loading: true });
    if (
      !emailError ||
      !domainError ||
      !tenantNameError ||
      !adminNameError ||
      !phoneNoError
    ) {
      console.log("inside if")
      RegisterTenant({
        adminEmailId: this.state.emailId,
        adminName: this.state.adminName,
        adminPhoneNumber: this.state.phoneNo,
        domain: this.state.domain,
        tenantName: this.state.tenantName
    }).then((res)=>{
      if(res.status === 200)
      history.push("/")
    })
   
      this.setState({ formError: true });
    } else {
      console.log("register")
   
      this.setState({ formError: false });}
  };
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Register Your Company</h1>
        <Form
          onSubmit={this.handleSubmit}
          style={{ paddingTop: "10px" }}
          error={this.state.formError}
        >
          <Form.Input
            required
            label="Company Name"
            value={this.state.tenantName}
            name="tenantName"
            error={this.state.tenantNameError}
            onChange={this.handleChange_companyName}
            placeholder="Nineleaps"
          />
          <Form.Input
            required
            label="Domain"
            value={this.state.domain}
            name="domain"
            error={this.state.domainError}
            onChange={this.handleChange_domain}
            icon="at"
            iconPosition="left"
            placeholder="nineleaps"
          />
          <Form.Input
            required
            label="Admin Name"
            value={this.state.adminName}
            name="adminName"
            error={this.state.adminNameError}
            onChange={this.handleChange_adminName}
            placeholder="Name"
          />
          <Form.Input
            required
            label="Email"
            value={this.state.emailId}
            name="adminEmailid"
            error={this.state.emailError}
            onChange={this.handleChange_emailId}
            placeholder="someone@example.com"
          />
          <Form.Input
            required
            label="Phone Number"
            value={this.state.phoneNo}
            error={this.state.phoneNoError}
            onChange={this.handleChange_phoneNo}
            name="phoneNo"
            placeholder="10-digit mobile number"
          />
        </Form>
        <div style={{ textAlign: "center", paddingTop: "20px" }}>
          <Button.Group>
            <Button>Cancel</Button>
            <Button.Or />
            <Button
              positive
              type="submit"
              disabled={
                !this.state.emailId ||
                !this.state.domain ||
                !this.state.tenantName ||
                !this.state.adminName ||
                !this.state.phoneNo
              }
              loading={this.state.loading}
              onClick={this.handleSubmit}
            >
              Save
            </Button>
          </Button.Group>
        </div>
      </div>
    );
  }
}

export default RegisterCompany;

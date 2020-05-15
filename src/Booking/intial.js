import React from "react";
import { Button, Form, Header, Checkbox, Radio } from "semantic-ui-react";
import history from "../Routes/history";
const Date_Selector = () => (
  <div>
    <div style={{ textAlign: "center" }}>
      <h1> Please Enter the date and time</h1>
    </div>
    <br></br>
    <Form>
      <Form.Input
        //   error={{ content: 'Please enter your first name', pointing: 'below' }}
        type="Date"
        fluid
        label="Date"
        placeholder="Select a Date"
        id="form-input-first-name"
      />
      <Form.Input
        //   error='Please enter your last name'
        type="time"
        fluid
        label="Start time"
        placeholder="Last name"
        onChange
      />
      <Form.Input
        //   error='Please enter your last name'
        type="time"
        fluid
        label="End Time"
        placeholder="End Time"
      />
      <div style={{ textAlign: "center" }}>
        <Button onClick={() => history.push("/filters")} type="submit">
          Continue
        </Button>
      </div>
    </Form>
  </div>
);
export default Date_Selector;

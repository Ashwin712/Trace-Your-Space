import React from "react";
import { Button, Form, Header, Checkbox, Radio } from "semantic-ui-react";
import history from "../Routes/history";
import { Link } from "react-router-dom";

class  Date_Selector extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Date: null,
            EventName : null,
            StartTime : null,
            EndTime : null     
        };
      }
    render(){
        return(
  <div>
    <div style={{ textAlign: "center" }}>
      <h1> Please Enter the date and time</h1>
    </div>
    <br></br>
    <Form>
    <Form.Field>
      <label>Event Name</label>
      <input placeholder='Event Name' onChange={(e) => this.setState({EventName : e.target.value})} />
    </Form.Field>

      <Form.Input
        //   error={{ content: 'Please enter your first name', pointing: 'below' }}
        type="Date"
        fluid
        label="Date"
        placeholder="Select a Date"
        id="form-input-first-name"
        onChange={(e) => this.setState({Date: e.target.value})}
      />
      <Form.Input
        //   error='Please enter your last name'
        type="time"
        fluid
        label="Start time"
        placeholder="Last name"
        onChange={(e) => this.setState({StartTime: e.target.value})}
      />
      <Form.Input
        //   error='Please enter your last name'
        type="time"
        fluid
        label="End Time"
        placeholder="End Time"
        onChange={(e) => this.setState({EndTime: e.target.value})}
      />
      <div style={{ textAlign: "center" }}>
          <Link>
        <Button onClick={() => history.push("/filters")} type="submit">
          Continue
        </Button>
        </Link>
      </div>
    </Form>
  </div>
        )
    }
};
export default Date_Selector;

import React from "react";
import { Button, Form, Header, Checkbox, Radio } from "semantic-ui-react";
import history from "../Routes/history";

class FilterSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      isProjector: null
    };
  }
  handleChange = (e, { value }) => this.setState({ value });
  render() {
    const { value } = this.state;
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h1> Please specify the Requirements</h1>
        </div>
        <Form style={{ textAlign: "center" }}>
          <br></br>
          <div style={{ textAlign: "center" }}>
            <Form.Group style={{ margin: "10px 0px" }} inline>
              <label>Facilities</label>
              <Checkbox label="Projector" className="facility_input" onChange={()=> this.setState({isProjector: true})} />
              <Checkbox
                label="Board"
                defaultChecked
                className="facility_input"
              />
              <Checkbox
                label="Markers"
                defaultChecked
                className="facility_input"
              />
              <Checkbox label="Water" className="facility_input" />
            </Form.Group>
            <br></br>
            <Form.Group inline>
              <label>Capacity</label>
              <Form.Radio
                label="10"
                value="sm"
                checked={value === "sm"}
                onChange={this.handleChange}
              />
              <Form.Radio
                label="20"
                value="md"
                checked={value === "md"}
                onChange={this.handleChange}
              />
              <Form.Radio
                label="30"
                value="lg"
                checked={value === "lg"}
                onChange={this.handleChange}
              />
              <Form.Radio
                label="40"
                value="40"
                checked={value === "40"}
                onChange={this.handleChange}
              />
            </Form.Group>
            <div style={{ textAlign: "center" }}>
              <Button
                type="submit"
                onClick={() => {
                  history.push("/booking");
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

export default FilterSelector;

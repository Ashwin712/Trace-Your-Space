import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Form,
  Header,
  Icon,
  Radio,
  Segment,
} from "semantic-ui-react";
import "./admin.css";

function handleSubmit(e) {
  console.log("submit");
  e.preventDefault();
  // this.props.form.validateFieldsAndScroll((err, values) => {
  //   if (!err) console.log("values", values);
  //   else console.log("error");
  // });
}
class NewRoom extends Component {
  state = {
    building: "",
    roomName: "",
    facilities: [],
    view: "",
    capacity: "5",
    buildingError: false,
    roomNameError: false,
  };
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Add a New Room</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            required
            label="Building Name"
            value={this.state.building}
            name="building"
            error={this.state.buildingError}
            // error={{ content: "Please enter building", pointing: "below" }}
            fluid
            placeholder="example:Main building"
          />
          <Form.Input
            required
            label="Room Name"
            name="roomName"
            value={this.state.roomName}
            error={this.state.roomNameError}
            placeholder="example:1st floor - cabin"
          />
          <Form.Group
            inline
            required
            name="facilities"
            value={this.state.facilities}
          >
            <label>Facilities</label>
            <Checkbox label="Projector" className="facility_input" />
            <Checkbox label="Board" defaultChecked className="facility_input" />
            <Checkbox
              label="Markers"
              defaultChecked
              className="facility_input"
            />
            <Checkbox label="Water" className="facility_input" />
          </Form.Group>
          <Form.Group
            inline
            required
            name="capacity"
            value={this.state.capacity}
          >
            <label>Capacity</label>
            <Radio label="5" defaultChecked className="capacity_input" />
            <Radio label="10" className="capacity_input" />
            <Radio label="20" className="capacity_input" />
            <Radio label="30" className="capacity_input" />
            <Radio label=">30" className="capacity_input" />
          </Form.Group>
          <Form.Group inline value={this.state.view} name="view">
            <label className="image_input">View</label>
            <Segment placeholder>
              <Header icon>
                <Icon name="image outline" style={{ fontSize: "20px" }} />
                <span style={{ fontSize: "14px" }}> No image is uploaded </span>
              </Header>
              <div style={{ textAlign: "center" }}>
                <Button primary>Add file</Button>
              </div>
            </Segment>
          </Form.Group>
        </Form>
        <div style={{ textAlign: "center" }}>
          <Button.Group>
            <Button>Cancel</Button>
            <Button.Or />
            <Button positive type="submit" onClick={handleSubmit}>
              Save
            </Button>
          </Button.Group>
        </div>
      </div>
    );
  }
}

export default NewRoom;

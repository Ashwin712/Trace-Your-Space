import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Form,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";
import "./admin.css";
import history from "../Routes/history"

class NewRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      building: "",
      roomName: "",
      facilities: [],
      view: "",
      capacity: "5",
      buildingError: false,
      roomNameError: false,
      formError: false,
      disable: true,
      loading: false,
    };
  }

  handleCancel = async () => {
    await this.setState({
      building: "",
      roomName: "",
      facilities: [],
      view: "",
      capacity: "5",
      buildingError: false,
      roomNameError: false,
      formError: false,
      disable: true,
      loading: false,
    });
  };
  handleChange_building = async (e) => {
    console.log("building", e.target.value);
    if (e.target.value !== "") {
      await this.setState({
        building: e.target.value,
        buildingError: false,
        // disable: false,
      });
      if (this.state.roomName !== "") await this.setState({ disable: false });
    } else {
      await this.setState({
        buildingError: true,
        building: e.target.value,
        disable: true,
      });
    }
  };

  handleChange_roomName = async (e) => {
    if (e.target.value !== "") {
      await this.setState({
        roomName: e.target.value,
        roomNameError: false,
        // disable: false,
      });
      if (this.state.building !== "") await this.setState({ disable: false });
    } else {
      await this.setState({
        roomNameError: true,
        roomName: e.target.value,
        disable: true,
      });
    }
  };

  handleChange_capacity = (e, { value }) => {
    console.log(this.state.capacity);
    this.setState({ capacity: value });
  };

  handleSubmit = (e) => {
    console.log("submit");
    this.setState({ loading: true });
    e.preventDefault();
    const error = false;
    if (!this.state.roomNameError || !this.state.buildingError) {
      this.setState({ formError: true });
      return;
    }
    this.setState({ loading: false });
  };

  render() {
    const { capacity } = this.state;
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Add a New Room</h1>
        <Form onSubmit={this.handleSubmit} error={this.state.formError}>
          <Form.Input
            required
            label="Building Name"
            value={this.state.building}
            name="building"
            error={this.state.buildingError}
            onChange={this.handleChange_building}
            placeholder="example:Main building"
          />
          <Form.Input
            required
            label="Room Name"
            name="roomName"
            value={this.state.roomName}
            error={this.state.roomNameError}
            onChange={this.handleChange_roomName}
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
          <Form.Group inline name="capacity">
            <label>Capacity</label>
            <Form.Radio
              label="5"
              value="5"
              checked={capacity === "5"}
              className="capacity_input"
              onChange={this.handleChange_capacity}
            />
            <Form.Radio
              label="10"
              value="10"
              checked={capacity === "10"}
              className="capacity_input"
              onChange={this.handleChange_capacity}
            />
            <Form.Radio
              label="20"
              value="20"
              checked={capacity === "20"}
              className="capacity_input"
              onChange={this.handleChange_capacity}
            />
            <Form.Radio
              label="30"
              value="30"
              checked={capacity === "30"}
              className="capacity_input"
              onChange={this.handleChange_capacity}
            />
            <Form.Radio
              label=">30"
              value=">30"
              checked={capacity === ">30"}
              className="capacity_input"
              onChange={this.handleChange_capacity}
            />
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
            <Button onClick={()=> history.push("/admin")}>Cancel</Button>
            <Button.Or />
            <Button
              positive
              type="submit"
              disabled={this.state.disable}
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

export default NewRoom;

import React, { Component } from "react";
import { Button, Icon, Image, Modal, Popup } from "semantic-ui-react";
import "./user.css";

class RoomView extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  show = (dimmer) => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;

    return (
      <div>
        <Button onClick={this.show("blurring")}>Daily</Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>
            Main building first floor - conference room
          </Modal.Header>
          <Modal.Content image>
            <div style={{paddingLeft:"20px"}}>
              <Image
                wrapped
                size="medium"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKkfrGfZiWLC2S-Z-4DMZc4rdkdcDl2hATg0MVJnwssxVoQsSh&usqp=CAU"
              />
            </div>
            <Modal.Description>
              <div style={{ paddingLeft: "30px" }}>
                <p>
                  <Popup
                    content="capacity"
                    trigger={
                      <span>
                        {/* <label className="facilities_label">Capacity</label> */}
                        <Icon name="users" size="large" />
                        <label>10</label>
                      </span>
                    }
                  />
                </p>
                <p>
                  <Icon name="hdd outline" size="large" />
                  <label>Projector</label>
                </p>
                <p>
                  <Icon name="edit outline" size="large" />
                  <label>Board and stationery</label>
                </p>
              </div>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              positive
              icon="thumbs up outline"
              labelPosition="right"
              content="close"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
export default RoomView;

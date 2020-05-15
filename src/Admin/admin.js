import React from "react";
import { Button, Card, Icon, Image, Modal, Popup } from "semantic-ui-react";
let loading = false;
let dimmer = null;

const items = [
  {
    name: "Project Report - April",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
    meta: {},
    extra: (
      <div style={{ textAlign: "right" }}>
        <Button>hi</Button>
      </div>
    ),
  },
  {
    header: "Project Report - May",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
    meta: "ROI: 34%",
  },
  {
    header: "Project Report - June",
    description:
      "Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.",
    meta: "ROI: 27%",
  },
];

const CardExampleGroups1 = ({ items }) => {
  return (
    <div>
      {items.map((value) => (
        <Card
          centered={true}
          fluid={true}
          onClick={(() => (loading = true), (dimmer = "blurring"))}
        >
          <Card.Content>
            <Image floated="right" size="mini" />
            <Card.Header>{value.name}</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
};

class admin extends React.Component {
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>List of Rooms Available </h1>
        <CardExampleGroups1 items={items} />
        <div>
          <Modal dimmer={dimmer} open={loading}>
            <Modal.Header>
              Main building first floor - conference room
            </Modal.Header>
            <Modal.Content image>
              <div style={{ paddingLeft: "20px" }}>
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
                onClick={() => (loading = false)}
              />
            </Modal.Actions>
          </Modal>
        </div>
      </>
    );
  }
}

export default admin;

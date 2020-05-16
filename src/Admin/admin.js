import React from "react";
import { Button, Card, Icon, Image, Modal, Popup } from "semantic-ui-react";
import history from "../Routes/history"
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
    name: "Project Report - April",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
    meta: "ROI: 34%",
  },
  {
    name: "Project Report - April",
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
              <Button onClick={()=>{history.push("/EditRoom")}} basic color="green">
                Edit Room
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
        <h1 style={{ textAlign: "center", marginBottom: '40px'}}>List of Rooms Available </h1>
        <CardExampleGroups1 style={{marginTop: "20px"}} items={items} />
      </>
    );
  }
}

export default admin;

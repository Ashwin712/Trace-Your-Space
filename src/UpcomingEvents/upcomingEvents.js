import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

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

const CardExampleGroupProps = () => {
  const CardExampleGroups1 = ({ items }) => {
    return (
      <div>
        {items.map((value) => (
          <Card centered={true} fluid={true}>
            <Card.Content>
              <Image floated="right" size="mini" />
              <Card.Header>{value.name}</Card.Header>
              <Card.Meta>Friends of Elliot</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group{" "}
                <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  View
                </Button>
                <Button basic color="red">
                  Cancel
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Upcoming Events </h1>
      <CardExampleGroups1 items={items} />
    </>
  );
};

export default CardExampleGroupProps;
 
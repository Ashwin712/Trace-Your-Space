import React from "react";
import {
  Container,
  Dropdown,
  Grid,
  Image,
  List,
  Menu,
  Segment,
  Button,
} from "semantic-ui-react";
import history from "../Routes/history";
import ContentSection from "./ContentSection";

const FixedMenuLayout = () => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <Image size="mini" src="/logo.png" style={{ marginRight: "1.5em" }} />
          TRACE X
        </Menu.Item>
        <Menu.Item as="a" onClick={() => history.push("/tenants")}>
          Tenants
        </Menu.Item>
        <Menu.Item as="a" onClick={() => history.push("/SelectDate")}>
          Book A Room
        </Menu.Item>
        <Menu.Item as="a" onClick={() => history.push("/upcomingEvents")}>
          Upcoming Events
        </Menu.Item>
        <Dropdown item simple text="Admin">
          <Dropdown.Menu>
            <Dropdown.Item as="a" onClick={() => history.push("/admin")}>
              List of Rooms
            </Dropdown.Item>
            <Dropdown.Item as="a" onClick={() => history.push("/NewRoom")}>
              Add a Room
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Menu position="right">
          <Menu.Item icon="user circle" />
          <Dropdown item simple text="Ashwin Karthik">
            <Dropdown.Menu>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Sign Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Container>
    </Menu>

    <Container text style={{ marginTop: "7em" }}>
      <ContentSection />
    </Container>
    <br></br>
    <br></br>
    <Segment
      inverted
      vertical
      style={{ margin: "11em 0em 0em", padding: "5em 0em 0em" }}
    >
      <Container textAlign="center">
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Image
              centered
              size="large"
              src="https://www.nineleaps.com/wp-content/themes/nineleaps/assets/img/nineleaps-logo-footer.svg"
            />
          </Grid.Column>
          <Grid.Column width={7}>
            <Image centered size="mini" src="/logo.png" />
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="#">
                Site Map
              </List.Item>
              <List.Item as="a" href="#">
                Contact Us
              </List.Item>
              <List.Item as="a" href="#">
                Terms and Conditions
              </List.Item>
              <List.Item as="a" href="#">
                Privacy Policy
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  </div>
);

export default FixedMenuLayout;

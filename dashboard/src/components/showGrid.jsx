import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import Storage from "./storage";
import Memory from "./memory";
import Network from "./network";

class Showgrid extends Component {
  state = {};
  render() {
    return (
      <div className="gridBlock">
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <Storage />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Memory />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Network />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Showgrid;

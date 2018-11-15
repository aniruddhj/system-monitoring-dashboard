import React, { Component } from "react";
import "./App.css";
import Showgrid from "./components/showGrid";
import { Segment, Header } from "semantic-ui-react";

class App extends Component {
  render() {
    let date = new Date().toString();

    return (
      <div className="App">
        <Segment clearing>
          <Header as="h2" floated="left">
            System Dashboard
          </Header>
          <Header as="h2" floated="right">
            Last Updated: {date}
          </Header>
        </Segment>
        <Showgrid />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class Network extends Component {
  state = {
    network: []
  };

  componentDidMount() {
    fetch("/network")
      .then(response => response.json())
      .then(network => this.setState({ network }))
      .catch(err => console.log(err));
  }

  render() {
    const { network } = this.state;

    return (
      <div>
        {network.map(network => (
          <div key={network.id}>
            <p style={{ textAlign: "center" }}>Network</p>
            <hr />
            <p style={{ fontWeight: "bold" }}>
              Status: {network.status === 0 ? "Not Connected" : "Connected"}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Network;

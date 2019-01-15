import React, { Component } from "react";

class Storage extends Component {
  state = {
    storage: []
  };

  componentDidMount() {
    fetch("/space")
      .then(response => response.json())
      .then(storage => this.setState({ storage }))
      .catch(err => console.log(err));
  }

  render() {
    const { storage } = this.state;

    return (
      <div>
        {storage.map(storage => (
          <div key={storage.id}>
            <p style={{ textAlign: "center" }}>Storage (GB)</p>
            <hr />
            <p style={{ fontWeight: "bold" }}>Avilable: {(storage.available/ 1073747824).toFixed(2)}</p>
            <p style={{ fontWeight: "bold" }}>Used: {(storage.used / 1073747824).toFixed(2)}</p>
            <p style={{ fontWeight: "bold" }}>Free: {(storage.free / 1073747824).toFixed(2)}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Storage;

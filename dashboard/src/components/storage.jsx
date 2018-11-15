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
            <p style={{ textAlign: "center" }}>Storage</p>
            <hr />
            <p style={{ fontWeight: "bold" }}>Avilable: {storage.available}</p>
            <p style={{ fontWeight: "bold" }}>Used: {storage.used}</p>
            <p style={{ fontWeight: "bold" }}>Free: {storage.free}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Storage;

import React, { Component } from "react";

class Memory extends Component {
  state = {
    memory: []
  };

  componentDidMount() {
    fetch("/memory")
      .then(response => response.json())
      .then(memory => this.setState({ memory }))
      .catch(err => console.log(err));
  }

  render() {
    const { memory } = this.state;

    return (
      <div>
        {memory.map(memory => (
          <div key={memory.id}>
            <p style={{ textAlign: "center" }}>Memory (GB)</p>
            <hr />
            <p style={{ fontWeight: "bold" }}>Available: {(memory.available / 1073747824).toFixed(2)} </p>
            <p style={{ fontWeight: "bold" }}>Used: {(memory.used / 1073747824).toFixed(2)}</p>
            <p style={{ fontWeight: "bold" }}>Free: {(memory.free / 1073747824).toFixed(2)}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Memory;

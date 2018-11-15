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
            <p style={{ textAlign: "center" }}>Memory</p>
            <hr />
            <p style={{ fontWeight: "bold" }}>Available: {memory.available}</p>
            <p style={{ fontWeight: "bold" }}>Used: {memory.used}</p>
            <p style={{ fontWeight: "bold" }}>Free: {memory.free}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Memory;

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.X.value
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h4>Title {this.props.id}</h4>
        <span className="badge badge-warning">
          <h1>{this.formatcount()}</h1>{" "}
        </span>

        <button
          onClick={this.handleIncrement}
          className="badge m-4 badge-primary"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="badge m-4 badge-primary"
        >
          Decrement
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.X.id)}
          className="btn btn-danger btn-md"
        >
          Delete
        </button>
      </div>
    );
  }
  getbadgeClasses() {
    let ok = "badge m-2 badge-";
    ok += this.state.count === 0 ? "warning" : "primary";
  }

  formatcount() {
    const { count } = this.state;
    return count === 0 && count <= 0 ? "Z" : count;
  }
}

export default Counter;

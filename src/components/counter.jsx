import React, { Component } from "react";

class Counter extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h4>Counter {this.props.X.id}</h4>
        <span className="badge badge-warning">
          <h1>{this.props.X.value}</h1>{" "}
        </span>

        <button
          onClick={this.props.handleIncrement}
          className="badge m-4 p-2 badge-primary"
        >
          Increment
        </button>
        <button
          onClick={this.props.handleDecrement}
          className="badge m-4 p-2 badge-primary"
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
}

export default Counter;

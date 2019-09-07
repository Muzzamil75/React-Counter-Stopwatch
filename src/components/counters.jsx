import React, { Component } from "react";
import Counter from "./counter";
import ModalWin from "./Modal";

class Counters extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  state = {
    counters: [
      { id: 1, value: 6 },
      { id: 2, value: 7 },
      { id: 3, value: 8 },
      { id: 4, value: 9 }
    ]
  };
  initialstate = this.state;

  handleReset = () => {
    this.setState(this.initialstate);
  };
  openModal = () => {
    this.setState({ showModal: true });
  };
  handleDelete = coun => {
    const arr2 = this.state.counters.filter(c => c.id !== coun);
    this.setState({ counters: arr2 });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleReset} className="btn btn-danger ">
          Reset
        </button>

        <div>
          {this.state.counters.map(coun => {
            return (
              <Counter onDelete={this.handleDelete} key={coun.id} X={coun} />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;

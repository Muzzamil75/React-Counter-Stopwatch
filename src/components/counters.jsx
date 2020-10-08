import React, { Component } from "react";
import Counter from "./counter";
import Stopwatch from "./stopwatch";

class Counters extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    counters: [
      { id: 1, value: 6 },
      { id: 2, value: 7 },
      { id: 3, value: 8 },
      { id: 4, value: 9 }
    ]
  };
  initialstate = this.state.counters;


  handleIncrement = (id) => {
    const index = this.state.counters.findIndex(item => item.id == id)
    this.state.counters[index] = {...this.state.counters[index],value : this.state.counters[index].value+1 }
    this.setState({ counters: this.state.counters  });
  };

  handleDecrement = (id) => {
      const index = this.state.counters.findIndex(item => item.id == id)
      this.state.counters[index] = {...this.state.counters[index],value : this.state.counters[index].value-1 }
      this.setState({ counters: this.state.counters  });
    };

  handleReset = () => {
    this.setState({ counters: [...this.initialstate] });
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
              <Counter
                onDelete={this.handleDelete}
                key={coun.id}
                handleIncrement={() => this.handleIncrement(coun.id)}
                handleDecrement={() => this.handleDecrement(coun.id)}
                X={coun} />
            );
          })}
        </div>
        <hr />
        <div style={{flexDirection:'column'}}>
          <span style={{fontSize:30}}>
            Stopwatch
          </span>
          <Stopwatch />
        </div>
      </React.Fragment>
    );
  }
}



export default Counters;

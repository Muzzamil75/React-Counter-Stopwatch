import React, { Component } from 'react';

const formattedSeconds = (sec) =>
Math.floor(sec / 60) +
  ':' +
('0' + sec % 60).slice(-2)


export default class Stopwatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timer: 0,
            laps: [],
            running: false,
            stopped: false
        }
        this.incrementer = this.state;
        this.Initial = this.state;
    }

    handleStart = () => {

        if (!this.state.running  )
        {
            this.incrementer = setInterval(() =>
                this.setState({
                    timer: this.state.timer + 1
                })
                , 1000);
            this.setState({ running: true })
        }
    }
    handleStop =() =>
    {
        //setting this.state to a variable
        clearInterval(this.incrementer);
        this.setState({ running: false })
    }

    handleReset = () => {

        clearInterval(this.Initial);
        this.setState({timer : 0})
        this.setState({laps: []});
    }
    handleLabClick = () => {
        this.setState({
            laps: this.state.laps.concat([this.state.timer])
        })

    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleReset} className="btn btn-danger "  >Reset </button>
                <div style={{ marginLeft: '40%' }} >

                  {formattedSeconds(this.state.timer)}
                    <div style={{ marginLeft: 20 }}>
                    <button onClick={this.handleLabClick} className="badge md-4 badge-primary">Lapse </button>
                    {this.handleLapse}
                    <button onClick={this.handleStop} className="badge md-4 badge-primary">Stop </button>
                    <button onClick={this.handleStart} className="badge md-4 badge-warning"> Start Timer</button>
                    </div>
                    <ul>
                        {this.state.laps.map((lap, i) =>
                            <li key={i} className="stopwatch-lap"><strong>{"Lap No " + (i + 1) + ":   "}</strong> {formattedSeconds(this.state.laps[i])}</li>)
                        }
                    </ul>


                </div>
            </React.Fragment>
        );

    }
}

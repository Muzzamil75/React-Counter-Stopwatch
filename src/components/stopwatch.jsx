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
        clearInterval(this.incrementer);
        this.setState({ running: false })
    }

    handleReset = () => {

        clearInterval(this.Initial);
        this.setState({timer : 0,laps:[]})
    }
    handleLabClick = () => {
        this.setState({
            laps: this.state.laps.concat([this.state.timer])
        })

    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleReset} className="btn m-2 btn-danger "  >Reset </button>
                <div style={{ marginTop:10 }} >

                    <div style={{ fontSize: 20,color: 'darkblue'}}>
                      {formattedSeconds(this.state.timer)}

                    </div>
                    <div>
                        <button onClick={this.handleLabClick} className="badge m-1 p-2 badge-primary">Lapse </button>
                        <button onClick={this.handleStop} className="badge m-1 p-2 badge-danger">Stop </button>
                        <button onClick={this.handleStart} className="badge m-1 p-2 badge-success"> Start Timer</button>
                    </div>
                    <ul style={{flexDirection:'row'}}>
                        {this.state.laps.map((lap, i) =>
                            <li key={i} className="stopwatch-lap"><strong>{"Lap No " + (i + 1) + ":   "}</strong> {formattedSeconds(this.state.laps[i])}</li>)
                        }
                    </ul>


                </div>
            </React.Fragment>
        );

    }
}

import React from "react";

class StopWatch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            startIsNext: true,
            runningTime: 0
        }
    }

    incrementRunningTime() {
        this.setState({ runningTime: this.state.runningTime + 1 });
    }

    startTimer() {
        this.timer = setInterval(() => this.incrementRunningTime(), 1000)
    }

    stopTimer() {
        clearInterval(this.timer);
        this.setState({ runningTime: 0 })
    }

    handleClick() {
        const startState = this.state.startIsNext;

        if (startState) {
            this.startTimer()
        } else {
            this.stopTimer()
        }

        this.setState({ startIsNext: !this.state.startIsNext });
    }

    render() {
        return (
            <>

                <h1> StopWatch </h1>

                <p> {this.state.runningTime}  </p>

                <button onClick={() => this.handleClick()}> {this.state.startIsNext ? 'Start' : 'Stop'}</button>
            </>
        );
    }
}

export default StopWatch;

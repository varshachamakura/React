import React from 'react';



class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      isRunning: false, // Initially, the timer is stopped
    };
  }

  timer = () => {
    this.setState((currState) => ({ seconds: currState.seconds + 1 }));
  };

  componentDidMount() {
    // No need to start the timer on mount
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`The timer is updated to ${this.state.seconds}`);
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Clear the interval if the component unmounts
  }

  start = () => {
    if (!this.state.isRunning) {
      this.interval = setInterval(this.timer, 1000);
      this.setState({ isRunning: true });
    }
  };

  stop = () => {
    if (this.state.isRunning) {
      clearInterval(this.interval);
      this.setState({ isRunning: false });
    }
  };
  restart = () => {
    this.stop(); // Stop the timer if it's running
    this.setState({ seconds: 0 }, () => {
      this.start(); // Start the timer again after resetting seconds
    });
  };

  formatTime = (seconds) => {
   hours = Math.floor(seconds / 3600);
   minutes = Math.floor((seconds % 3600) / 60);
   secs = seconds % 60;

   formatNumber = (num) => (num < 10 ? `0${num}` : `${num}`);

    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(secs)}`;
  };

  render() {
    return (
      <div>
        <h1>{this.formatTime(this.state.seconds)}</h1>
        <div>
          <button onClick={this.start}>Start Timer</button>
          <button onClick={this.stop}>Stop Timer</button>
          <button onClick={this.restart}>
            <i className="fas fa-redo"></i>
          </button>
        </div>
        
      </div>
    );
  }
}

export default Timer;

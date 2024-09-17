import React from 'react'
class Timer extends React.Component{
     constructor(){
        super();
        this.state = {
            seconds : 0,
            isRunning :true,

        }

    }

    timer = () => {
        this.setState(currState => ({seconds :currState.seconds + 1}));
    }
    
    componentDidMount(){
        this.interval= setInterval(this.timer,1000)
    }

    componentDidUpdate(prevProps,prevState){
        console.log(`The timer is updated to ${this.state.seconds}`);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    stop = () => {
        clearInterval(this.interval);
        this.setState({isRunning:false})
    }
    render(){
        return(
        <>
            <h1>{this.state.seconds}</h1>
            {this.state.isRunning ? <button onClick={this.stop}>Stop Timer</button> : <h6>Timer Stopped</h6>}
        </>

        )
    }
}

export default Timer;
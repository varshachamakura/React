import React from 'react' ;



class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }
    }
    increment = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement = () =>{
        if(this.state.count> 0){
            this.setState({
                count: this.state.count - 1
            })

        }
    }

render() {
    return (
        <div className="btn-group block" role="group" aria-label="Basic example">
        <button onClick={this.decrement} type="button" className="btn btn-danger">-</button>
        <button type="button" className="btn btn-light">{this.state.count}</button>
        <button onClick={this.increment} type="button" className="btn btn-success">+</button>
      </div>
    )
}
}

export default  Counter;

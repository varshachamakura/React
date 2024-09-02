import React from 'react';

class State extends React.Component {
    state = {
        username: "Alex",
        batch: "A",
        greet: "Hello"
    }

    toggleGreeting = () => {
        this.setState(prevState => ({
            greet: prevState.greet === "Hello" ? "Welcome" : "Hello"
        }));
    }

    render() {
        return (
            <>
                <h1>{this.state.greet}, {this.state.username} from batch {this.state.batch}</h1>
                <button onClick={this.toggleGreeting}>Change Greeting</button>
            </>
        );
    }
}

export default State;

import React, { Component } from 'react';

interface StateCount {
    count: number;
}
class Code2 extends Component<{}, StateCount> {
    state: StateCount = {
        count: 0
    };
    increment = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    };
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Code2;
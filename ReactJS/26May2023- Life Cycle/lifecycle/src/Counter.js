import React from 'react';
class Counter extends React.Component {

    constructor() {
        console.log("constructor of Counter is called");
        super();
        this.state = {
            counter: 0
        }
    }
    updateCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
    }
    render() {
        console.log("render called");
        return (
            <div>
                <h1 onClick={this.updateCounter}>Counter value {this.state.counter}</h1>
            </div>
        )
    }
    componentDidMount() {
        console.log("component did mount called");
    }
    componentDidUpdate() {
        console.log("component did update called");
    }
}
export default Counter;
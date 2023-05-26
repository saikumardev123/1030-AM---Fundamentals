import React from 'react';
import Child from './Child';
class Parent extends React.Component {
    constructor() {
        console.log("Parent Constructor");
        super();
        this.state = {
            counter: 0
        }
    }
    componentDidMount() {
        console.log(" Parent component did mount called");
    }
    updateCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
    }
    componentDidUpdate() {
        console.log("Parent Component Did Update")
    }
    render() {
        console.log("Parent render");
        return (
            <div>
                <h1 onClick={this.updateCounter}>Counter {this.state.counter}</h1>
                <Child counter={this.state.counter}></Child>
            </div>
        )
    }
}
export default Parent;
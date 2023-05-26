import React from 'react';
class Child extends React.Component {
    constructor() {
        super();
        console.log("Child Constructor")
    }
    componentDidMount() {
        console.log("Child Component Did mount");
    }
    componentDidUpdate() {
        console.log("Child Component Did Update");
    }
    render() {
        console.log("Child render");
        return (
            <div>
                <h1>Counter in Child: {this.props.counter}</h1>
            </div>
        )
    }
}
export default Child;
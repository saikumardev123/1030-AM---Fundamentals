import React from 'react';
class Test extends React.Component {
    i = 0;
    render() {
        console.log("render called");
        return (
            <div>
                <h1 onClick={() => {
                    this.i++;
                    console.log(this.i);
                    if (this.i == 3) {
                        this.forceUpdate();
                    }
                }}>Test Component</h1>
            </div>
        )
    }
}
export default Test;
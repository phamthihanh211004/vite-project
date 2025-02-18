import React from "react";

class Childcomponent extends React.Component {
    render() {
        return (
            <div>
                <h3>Child Component</h3>
                <p>Received data: {this.props.data}</p>
            </div>
        );
    }
}

export default Childcomponent;

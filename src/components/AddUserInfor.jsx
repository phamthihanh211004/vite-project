import React from "react";

class AddUserInfor extends React.Component {
    state = {
        Name: "",
        Age: ""
    };

    handleOnChangeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault(); // Ngăn trang bị load lại
        this.props.handleAddnewUser({
            id: Math.floor(Math.random() * 100) + 1, // Tạo id ngẫu nhiên
            Name: this.state.Name,
            Age: this.state.Age
        });
        // Reset form sau khi submit
        this.setState({
            Name: "",
            Age: ""
        });
    };

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <label>Your name: </label>
                <input
                    type="text"
                    name="Name"
                    value={this.state.Name}
                    onChange={this.handleOnChangeInput}
                />
                <br />
                <label>Your Age: </label>
                <input
                    type="number"
                    name="Age"
                    value={this.state.Age}
                    onChange={this.handleOnChangeInput}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default AddUserInfor;

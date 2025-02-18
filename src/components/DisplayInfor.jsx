import React from "react";


class DisplayInfor extends React.Component {
    render() {
        const { listUser } = this.props;
        return (
            <div>
                {listUser.map((user) => {
                    return (
                        <div key={user.id} className={user.Age < 18 ? "red" : "white"}>
                            <div>User name is: {user.Name}</div>
                            <div>User Age: {user.Age}</div>
                            <hr />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default DisplayInfor;

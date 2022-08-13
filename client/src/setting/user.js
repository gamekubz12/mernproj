import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: localStorage.getItem("user_id")
            ,persons: []
        };
    };

    componentDidMount() {
        this.getList();
    };

    getList = () => {
        axios.get(`/api/user/getall`)
            .then(res => {
                const data = res.data;
                const persons = data.result;
                this.setState({ persons });
            }
        )
    };

    render() {
        const { persons } = this.state;
        let { user_id } = this.state;
        if ( user_id === null) {
            return (<Navigate to='../signin' />)
        } else {
            return (
                <div className="App">
                    <h1>User List</h1>
                    {persons.length ? (
                        <div>
                            <ul>
                                {persons.map(
                                    (item) => {
                                        return(
                                            <li value={item._id}>{item.username}</li>
                                        )
                                    }
                                )}
                            </ul>
                        </div>
                    ) : (
                        <div>
                            <h2>
                                No User List
                            </h2>
                        </div>
                    )}
                </div>
            );
        }
    };
};

export default UserPage;
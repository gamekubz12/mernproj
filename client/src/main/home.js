import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: localStorage.getItem("user_id")
        }
    }

    render() {
        let { user_id } = this.state
        if (user_id === null) {
            return (<Navigate to='./signin' />)
        } else {
            return (
                <div className="App">
                    <h1>Demo Project</h1>
                    <Link to='/user'>
                        <button variant="raised">
                            User Management
                        </button>
                    </Link>
                </div>
            );
        }
    }
};

export default HomePage;
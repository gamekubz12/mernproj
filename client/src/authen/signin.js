import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import validateSignin from "./validSignin";
import { Link, Navigate } from 'react-router-dom';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
            ,password: ''
        }
    }

    handleUsername = (evt) => {
        let username_val = evt.target.value
        this.setState({username: username_val})
    }

    handlePassword = (evt) => {
        let password_val = evt.target.value
        this.setState({password: password_val})
    }

    handleSubmit = (evt) => {
        let { username, password } = this.state;
        evt.preventDefault();
        validateSignin(username, password)
    }

    render() {
        let {username, password} = this.state

        return (
            <div>
                <Container>
                    <Row>
                        <Col md={4}>
                            <h1>Sign In</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 3, offset: 3 }}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={this.handleUsername}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={password} onChange={this.handlePassword}/>
                                </Form.Group>
                                <Col md={{ span: 3, offset: 3 }} >
                                    <Button variant="primary" type="submit">Submit</Button>
                                </Col>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};



export default SignIn;
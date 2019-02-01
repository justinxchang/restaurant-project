import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap'
// import './Navbar.css'
import axios from 'axios'

class Navbar2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: false
        }
    }

    async componentDidMount() {
        let res = await axios.get('/auth/user-data')
        if (res.data) {
            this.setState({ loggedIn: true })
            console.log('res', res.data)
        }
    }

    render() {
        if (this.state.loggedIn) {

            return (
                <Nav pullRight>
                    <NavItem eventKey={4} componentClass={Link} to='/login' href="/login">
                        Login
                    </NavItem>
                    <NavItem eventKey={8} componentClass={Link} to='/profile' href="/profile">
                        Profile
                    </NavItem>
                </Nav>
            )

        } else {
            return (
                <Nav pullRight>
                    <NavItem eventKey={4} componentClass={Link} to='/login' href="/login">
                        Login
                    </NavItem>
                    <NavItem eventKey={8} componentClass={Link} to='/profile' href="/profile">
                        Profile
                    </NavItem>
                </Nav>
            )
        }
    }
}

export default Navbar2;
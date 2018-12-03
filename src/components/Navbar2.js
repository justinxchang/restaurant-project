import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import './Navbar.css'
import axios from 'axios'

class Navbar2 extends Component {
    constructor(props){
        super(props)

        this.state = {
            loggedIn: false
        }
    }

    async componentDidMount() {
        let res = await axios.get('/api/user-data')
        if(res.data){
            this.setState({loggedIn: true})
            console.log('res',res.data)
        }
    }
    
    render() {
        if(this.state.loggedIn){

        return (
            <Nav pullRight>
                {/* <NavItem eventKey={5} componentClass={Link} to='/addform' href="/addform">
                    Add Form
                </NavItem>
                <NavItem eventKey={6} componentClass={Link} to='/orders' href="/orders">
                    Orders
                </NavItem>
                <NavItem eventKey={7} componentClass={Link} to='/chart' href="/chart">
                    Chart
                </NavItem> */}
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
        </Nav>
        )
    }
}
}

export default Navbar2;
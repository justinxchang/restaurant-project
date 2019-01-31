import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom';
import Navbar2 from './Navbar2'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import './Navbar.css'

class NavbarComponent extends Component {
    render(){
        let path = this.props.location.pathname;
        if(path !== '/'){
            return (

                <div className="navbar">             
    
                    <div>
                    <Navbar inverse collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                            <Link to="/" href="/">Home</Link>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                            <NavItem eventKey={1} componentClass={Link} to="/drinkmenu" href="/drinkmenu">
                                Drinks
                            </NavItem>
                            <NavItem eventKey={2} componentClass={Link} to="/foodmenu" href="/foodmenu">
                                Food
                            </NavItem>
                            <NavItem eventKey={3} componentClass={Link} to="/cart" href="/cart">
                                Cart
                            </NavItem>
                            </Nav>

                            <Navbar2 />

                        </Navbar.Collapse>
                        </Navbar>    
                    </div>
                </div>
            )
    
        } else {
            return null
        }
    }
}

export default withRouter(NavbarComponent)
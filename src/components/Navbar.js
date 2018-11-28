import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import './Navbar.css'

class NavbarComponent extends Component {
    render(){
        return (
            <div className="navbar">             
                {/* <Link to='/'><button>Home</button></Link>
                
                <Link to='/drinkmenu'><button>Drinks</button></Link>
                
                <Link to='/foodmenu'><button>Food</button></Link>
                
                <Link to='/cart'><button>Cart</button></Link>
                
                <Link to='/addform'><button>Add Form</button></Link>

                <Link to='/orders'><button>Orders</button></Link>

                <Link to='/login'><button>Login</button></Link> */}
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
                        <Nav pullRight>
                        <NavItem eventKey={4} componentClass={Link} to='/addform' href="/addform">
                            Add Form
                        </NavItem>
                        <NavItem eventKey={5} componentClass={Link} to='/orders' href="/orders">
                            Orders
                        </NavItem>
                        <NavItem eventKey={6} componentClass={Link} to='/chart' href="/chart">
                            Chart
                        </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>    
                </div>
            </div>
        )
    }
}

export default NavbarComponent
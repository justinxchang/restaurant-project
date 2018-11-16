import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'


class Navbar extends Component {
    render(){
        return (
            <div>
                <Link to='/'><button>Home</button></Link>
                
                <Link to='/drinkmenu'><button>Drinks</button></Link>
                
                <Link to='/foodmenu'><button>Food</button></Link>
                
                <Link to='/cart'><button>Cart</button></Link>
                
                <Link to='/addform'><button>Add Form</button></Link>

                <Link to='/orders'><button>Orders</button></Link>

                <Link to='/login'><button>Login</button></Link>
                <div>

                </div>
            </div>
        )
    }
}

export default Navbar
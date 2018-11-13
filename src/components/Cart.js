import React, {Component} from 'react'
// import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {addDrink} from '../ducks/reducer'
// import Drinks from './Drinks'



class Cart extends Component {
    
    state = {
        cart: [],
    }

    // function addDrink(id){
    
    checkOut(cart){
        //move from cart db to order db
            //
        let completedOrder = this.state.cart
        //clear cart db
    }
    
    render(){
        let viewCart = this.state.cart.map((item, i) => {
            return (
                {item}
            )
        })
        return (
            <div>
                Cart
                {viewCart}
                <button onClick={() => this.checkOut(this.state.cart)}>Checkout</button>
                
            </div>
        )
    }
}

export default connect(null,)(Cart)
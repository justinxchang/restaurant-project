import React, {Component} from 'react'
// import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { addToCart, getFromCart} from '../ducks/reducer'
import axios from 'axios';
// import Drinks from './Drinks'

class Cart extends Component {

    async componentDidMount(){
        let result = await axios.get('/api/getFromCart')
        this.props.getFromCart(result.data)    
    }

    async checkOut(cart){
        let response = axios.get('/api/cartToOrders')
        this.props.history.push('/cart')
    }

    render(){
        console.log('this is cart',this.props.cart)
        let viewCart = this.props.cart.map((item, i) => {
            return (
                <div key={i}>
                    {/* <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>{item.quantity}</td>
                    <td>${item.item_total}</td>
                </div> */}


                <br />
                <br />
                    <p>Name: {item.name}</p>              <p>Price: ${item.price}</p> 
                    <p>Quantity: {item.quantity}</p>
                    <p>Item Total: ${item.item_total}</p>
                    <button>Edit</button>
                    <button onClick={() => this.deleteItem(i)}>Delete</button>
                </div>
            )
        })
        return (
            <div>
                Cart
                {viewCart}  
                <br />
                <button onClick={() => this.checkOut()}>Checkout</button>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return state
}

const dispatchToProps = {
    addToCart,
    getFromCart
}

export default connect(mapStateToProps, dispatchToProps)(Cart)
import React, {Component} from 'react'
// import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { addToCart, updateCart, updateTotal} from '../ducks/reducer'
import axios from 'axios';
import Stripe from './Stripe'
// import Drinks from './Drinks'

class Cart extends Component {

    async componentDidMount(){
        let result = await axios.get('/getFromCart')
        this.props.updateCart(result.data)      
    }

    async checkOut(cart){
        let response = axios.get('/cartToOrders')
        this.props.updateCart(response.data)      
    }

    async getTotal(order_num){
        let response = axios.post(`/getTotal/${order_num}`)
        this.props.updateTotal(response.data)
    }

    async deleteItem(id){
        let result = await axios.delete(`/deleteFromCart/${id}`)
        this.props.updateCart(result.data)      
    }
    
    async editQuantity(quantity, id){
        let result = await axios.put(`/editQuantity/${id}`, {quantity})
        this.props.updateCart(result.data)
        console.log(result.data)
        console.log(result.data.order_num)
        this.getTotal(result.data.order_num)
    }

    render(){
        let viewCart = this.props.cart.map((item) => {
            return (
                <div key={item.id}>
                <br />
                <br />
                    <h6>Name: {item.name}</h6>              <h6>Price: ${item.price}</h6> 
                    {/* <h6>Quantity: {item.quantity}</h6>
                    <h6>Item Total: ${item.item_total}</h6> */}
                    <select onChange={(event) => this.editQuantity(event.target.value, item.id)}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    <button onClick={() => this.deleteItem(item.id)}>Delete</button>
                </div>
            )
        })
        return (
            <div>
                Cart
                {viewCart}  
                <br />
                Total: {this.props.total}
                <button onClick={() => this.checkOut()}>Checkout</button>
                <br />
                <Stripe />


            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

const dispatchToProps = {
    addToCart,
    updateCart,
    updateTotal
}

export default connect(mapStateToProps, dispatchToProps)(Cart)
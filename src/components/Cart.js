import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {updateCart, updateTotal} from '../ducks/reducer'
import axios from 'axios';
import Stripe from './Stripe'
import {Table, Grid, Row, Col, Glyphicon} from 'react-bootstrap'
import './Cart.css'

class Cart extends Component {

    async componentDidMount(){
        let result = await axios.get('/getFromCart')
        this.props.updateCart(result.data)
        this.getTotal()      
    }

    async cartToOrders(cart){
        let response = await axios.get('/cartToOrders')
        this.props.updateCart(response.data)
    }

    async getTotal(){
        let response = await axios.get(`/getTotal`)
        console.log(response.data[0].sum)
        let total = response.data[0].sum
        this.props.updateTotal(total)
    }

    async deleteItem(id){
        let result = await axios.delete(`/deleteFromCart/${id}`)
        this.props.updateCart(result.data)
        this.getTotal()      
    } 
    
    async editQuantity(quantity, id){
        let result = await axios.put(`/editQuantity/${id}`, {quantity})
        this.props.updateCart(result.data)
        console.log(result.data)
        this.getTotal()
    }

    render(){
        let viewCart = this.props.cart.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td><select onChange={(event) => this.editQuantity(event.target.value, item.id)} value={item.quantity}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select> <button onClick={() => this.deleteItem(item.id)}><Glyphicon glyph='trash'/></button></td>
                </tr>

                /* <br />
                <br />
                    <h6>Name: {item.name}</h6>              <h6>Price: ${item.price} Quantity: {item.quantity}</h6> 
                    <select onChange={(event) => this.editQuantity(event.target.value, item.id)}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    <button onClick={() => this.deleteItem(item.id)}>Remove</button> */

            )
        })
        return (
            <div>
                <Grid className="ggrid">
                    <Row className="rrow">

                    Cart
                    <Table responsive bordered>
                        <thead>
                            <tr>
                            <th className='cart-name'>Name</th>
                            <th className='cart-price'>Price</th>
                            <th className='cart-quantity'>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viewCart}
                        </tbody>
                        </Table>
                    
                    <br />
                    Total: ${this.props.total}
                    <br />
                    <Stripe />

                    </Row>

                </Grid>


            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

const dispatchToProps = {
    updateCart,
    updateTotal
}

export default connect(mapStateToProps, dispatchToProps)(Cart)
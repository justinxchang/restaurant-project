import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import Food from './Food'
import axios from 'axios';
import {addToCart, getFromCart} from '../ducks/reducer'


class FoodMenu extends Component {
    
    state = {
        foodMenu: [],
        cart: []
    }

    async componentDidMount(){
        let res = await axios.get('/api/getfood')
        this.setState({foodMenu: res.data})
        // let result = await axios.get('/api/getFromCart')
        // this.props.getFromCart(result.data)
        // console.log('foodMenu', this.state.foodMenu)  
        // console.log('data from db', result.data)
    
    }

    async addToOrder(foodObj){
        let res = await axios.post('/api/addToOrder', foodObj)
        let updatedCart = this.state.cart.push(foodObj)
        console.log(`Added ${foodObj.name} to order.`)
    } 

    render(){
        let foodList = this.state.foodMenu.map((food) => {
            return (
                <div key={food.id}>
                    <h5>{food.name}</h5>
                    <h6>{food.description}</h6>
                    <h6>${food.price}</h6>
                    <button onClick={() => this.addToOrder(food)}>Add to Order</button>
                    {/* {console.log('redux cart', this.props.cart)} */}
                </div>
            )
        })

        return (
            <div>
                <h2>Food Menu</h2>
                <div>
                    {foodList}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('state', state)
    return state
}

const dispatchToProps = {
    addToCart,
    getFromCart
}

export default connect(mapStateToProps, dispatchToProps)(FoodMenu)
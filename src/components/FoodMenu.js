import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import Food from './Food'
import axios from 'axios';


class FoodMenu extends Component {
    
    state = {
        foodMenu: [],
        cart: []
    }

    componentDidMount(){
        axios.get('/api/getfood')
        .then(res => {this.setState({
            foodMenu: res.data
        })})
        console.log('foodMenu', this.state.foodMenu)
    } 
    
    async addToOrder(foodObj){
        let res = await axios.post('/api/addToOrder', foodObj)
        let updatedCart = this.state.cart.push(foodObj)
        console.log('cart', this.state.cart)
        console.log('foodMenu', this.state.foodMenu)
        // if(res.status === 200)
        // alert('Added to order')
    } 

    render(){
        let foodList = this.state.foodMenu.map((food) => {
            return (
                <div key={food.id}>
                    <h5>{food.name}</h5>
                    <h6>{food.description}</h6>
                    <h6>${food.price}</h6>
                    <button onClick={() => this.addToOrder(food)}>Add to Order</button>
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

export default FoodMenu
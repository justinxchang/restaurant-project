import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import Food from './Food'
import axios from 'axios';


class FoodMenu extends Component {
    
    state = {
        foodMenu: []
    }

    componentDidMount(){
        axios.get('/api/getfood')
        .then(res => {this.setState({
            foodMenu: res.data
        })})
        console.log('foodMenu', this.state.foodMenu)
    }

    async addToOrder(id){
        console.log('id', id)
        console.log(this.state.foodMenu[id]) //nothing passes through
        let res = await axios.post('/api/addToOrder', {
            foodName: this.state.foodMenu[id].name,
            foodPrice: this.state.foodMenu[id].price
        })
        if(res.status === 200)
        alert('Added to order')
    }

    render(){
        let foodList = this.state.foodMenu.map((food, i) => {
            return (
                <div key={i}>
                    <h5>{food.name}</h5>
                    <h6>{food.description}</h6>
                    <h6>${food.price}</h6>
                    <button onClick={() => this.addToOrder(i)}>Add to Order</button>
                    
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
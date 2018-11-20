import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import Food from './Food'
import axios from 'axios';
import {getFromCart, updateFoodMenu} from '../ducks/reducer'

class FoodMenu extends Component {
    
    async componentDidMount(){
        let res = await axios.get('/getAllFood')
        this.props.updateFoodMenu(res.data)
    }

    async addToCart(foodObj){
        let res = await axios.post('/addToCart', foodObj)
        console.log(`Added ${foodObj.name} to order.`)
    } 
 
    render(){
        let foodList = this.props.foodMenu.map((food) => {
            return (
                <div key={food.id}>
                    <h5>{food.name}</h5>
                    <h6>{food.description}</h6>
                    <h6>${food.price}</h6>                 
                    <button onClick={() => this.addToCart(food)}>Add to Order</button>
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
    return state
}

const dispatchToProps = {
    updateFoodMenu
}

export default connect(mapStateToProps, dispatchToProps)(FoodMenu)
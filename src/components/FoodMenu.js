import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import Food from './Food'
import axios from 'axios';
import {addToCart, getFromCart, updateMenu} from '../ducks/reducer'

class FoodMenu extends Component {
    
    async componentDidMount(){
        let res = await axios.get('/getfood')
        this.props.updateMenu(res.data)
    }

    async addToOrder(foodObj){
        let res = await axios.post('/addToOrder', foodObj)
        console.log(`Added ${foodObj.name} to order.`)
    } 
 
    render(){
        let foodList = this.props.menu.map((food) => {
            return (
                <div key={food.id}>
                    {/* <Food name={food.name} description={food.description} price={food.price} addToOrder={this.addToOrder()} /> */}
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

function mapStateToProps(state){
    return state
}

const dispatchToProps = {
    addToCart,
    updateMenu
}

export default connect(mapStateToProps, dispatchToProps)(FoodMenu)
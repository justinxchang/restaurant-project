import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import Food from './Food'
import axios from 'axios';
import {getFromCart, updateFoodMenu} from '../ducks/reducer'
import {Grid, Row, Col, ListGroup, Alert, Image} from 'react-bootstrap'
import './Food.css'

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
        let appetizers = this.props.foodMenu.filter(food => food.category === 'appetizers').map((food) => (
            <Food className="food-menu" key={food.id} food={food} addToCart={this.addToCart}/>
        ))
        
        let soupsalad = this.props.foodMenu.filter(food => food.category === 'soupsalad').map((food) => (
            <Food className="food-menu" key={food.id} food={food} addToCart={this.addToCart}/>
        ))
        
        
        let steaks = this.props.foodMenu.filter(food => food.category === 'steaks').map((food) => (
            <Food className="food-menu" key={food.id} food={food} addToCart={this.addToCart}/>
        ))
        

        return (
            <div></div>
                    <h2>Food Menu</h2>
                            <h3>Appetizers</h3>
                            <div className='container2'>
                                    {appetizers}
                            </div>
                            <h3>Soup or Salad</h3>
                            <div className='container2'>
                                    {soupsalad}
                            </div>
                            <h3>Steak</h3>
                            <div className='container2'>
                                    {steaks}
                            </div>
                            <h3>Seafood</h3>
                            <div className='container2'>
                                    {seafood}
                            </div>
                            < hr />
                            <h3>Pizza</h3>
                            <div className='container2'>
                                    {pizzas}
                            </div>
                            < hr />


                </Row>
        

            </Grid>
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



















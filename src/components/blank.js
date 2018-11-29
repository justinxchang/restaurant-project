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
        let foodList = this.props.foodMenu.map((food) => (
            <Food className="food-menu" key={food.id} food={food} addToCart={this.addToCart}/>
        ))

        let snacks = this.props.foodMenu.filter(food => food.category === 'snacks').map((food) => (
            <Food className="food-menu" key={food.id} food={food} addToCart={this.addToCart}/>
        ))
        
        let appetizers = this.props.foodMenu.filter(food => food.category === 'appetizers').map((food) => (
            <Food className="food-menu" key={food.id} food={food} addToCart={this.addToCart}/>
        ))
        
        let soupsalad = this.props.foodMenu.filter(food => food.category === 'soupsalad').map((food) => (
            <Food className="food-menu" key={food.id} food={food} addToCart={this.addToCart}/>
        ))
        
        let housefavorites = this.props.foodMenu.filter(food => food.category === 'housefavorites').map((food) => (
            <Food className="food-menu" key={food.id} food={food} addToCart={this.addToCart}/>
        ))
        
        let steaks = this.props.foodMenu.filter(food => food.category === 'steaks').map((food) => (
            <Food className="food-menu" key={food.id} food={food} addToCart={this.addToCart}/>
        ))
        
        let seafood = this.props.foodMenu.filter(food => food.category === 'seafood').map((food) => (
            <Food className="food-menu" key={food.id} food={food} addToCart={this.addToCart}/>
        ))
        
        let pizzas = this.props.foodMenu.filter(food => food.category === 'pizzas').map((food) => (
            <Food className="food-menu" key={food.id} food={food} addToCart={this.addToCart}/>
        ))
        
        let burgers = this.props.foodMenu.filter(food => food.category === 'burgers').map((food) => (
            <Food className="food-menu" key={food.id} food={food} addToCart={this.addToCart}/>
        ))
        
        let sandwiches = this.props.foodMenu.filter(food => food.category === 'sandwiches').map((food) => (
            <Food className="food-menu" key={food.id} food={food} addToCart={this.addToCart}/>
        ))
        
        let desserts = this.props.foodMenu.filter(food => food.category === 'desserts').map((food) => (
            <Food className="food-menu" key={food.id} food={food} addToCart={this.addToCart}/>
        ))
        
        let kids = this.props.foodMenu.filter(food => food.category === 'kids').map((food) => (
            <Food className="food-menu" key={food.id} food={food} addToCart={this.addToCart}/>
        ))

        return (
            <Grid>
                <Row>
                    
                    <h2>Food Menu</h2>
                            <h3>Snacks</h3>
                            <div className='container2'>
                                    {snacks}
                            </div>
                            <h3>Appetizers</h3>
                            <div className='container2'>
                                    {appetizers}
                            </div>
                            <h3>Soup or Salad</h3>
                            <div className='container2'>
                                    {soupsalad}
                            </div>
                            <h3>House Favorites</h3>
                            <div className='container2'>
                                    {housefavorites}
                            </div>
                            <h3>Steak</h3>
                            <div className='container2'>
                                    {steaks}
                            </div>
                            <h3>Seafood</h3>
                            <div className='container2'>
                                    {seafood}
                            </div>
                            <h3>Pizza</h3>
                            <div className='container2'>
                                    {pizzas}
                            </div>
                            <h3>Burgers</h3>
                            <div className='container2'>
                                    {burgers}
                            </div>
                            <h3>Sandwiches</h3>
                            <div className='container2'>
                                    {sandwiches}
                            </div>
                            <h3>Desserts</h3>
                            <div className='container2'>
                                    {desserts}
                            </div>
                            <h3>Kids</h3>
                            <div className='container2'>
                                    {kids}
                            </div>
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



















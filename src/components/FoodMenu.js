import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import Food from './Food'
import axios from 'axios';
import {getFromCart, updateFoodMenu} from '../ducks/reducer'
import {Grid, Row, Col, ListGroup, Alert} from 'react-bootstrap'
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
        //.filter by category
        let foodList = this.props.foodMenu.map((food) => (
            <Food className="food-menu" key={food.id} food={food} addToCart={this.addToCart}/>

        ))


        return (
            <Grid>
                <Row>
                    
                    <h2>Food Menu</h2>

                            <div className='container2'>
                                {foodList}
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
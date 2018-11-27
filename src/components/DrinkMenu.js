import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import Food from './Food'
import axios from 'axios';
import {updateDrinkMenu} from '../ducks/reducer'
import {Button, Modal, Col, Image} from 'react-bootstrap'
import './DrinkMenu.css'
import Drinks from './Drinks'

class DrinkMenu extends Component {
    
    async componentDidMount(){
        let res = await axios.get('/getAllDrinks')
        this.props.updateDrinkMenu(res.data)
    }

    async addToCart(drinkObj){
        let res = await axios.post('/addToCart', drinkObj)
        console.log(`Added ${drinkObj.name} to order.`)
    } 
 
    render(){
        let drinkList = this.props.drinkMenu.map((drink) => (
            <Drinks key={drink.id} drink={drink} addToCart={this.addToCart}/>
        ));
            
        return (
            <div>
                <h2>Drink Menu</h2>
                <div>
                    {drinkList}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

const dispatchToProps = {
    updateDrinkMenu
}

export default connect(mapStateToProps, dispatchToProps)(DrinkMenu)
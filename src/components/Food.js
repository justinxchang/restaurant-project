import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {ListGroupItem, Image} from 'react-bootstrap'
import './Food.css'

class Food extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        const {food} = this.props
        return (<div className='food-menu' key={food.id}>
            <ListGroupItem  header={food.name}>
                    <div>${food.price} | {food.description}</div>
                    <Image className="food-image" src={food.image} thumbnail responsive/>
                    <br />
                    <button onClick={() => this.props.addToCart(food)}>Add to Order</button>

            </ListGroupItem>             
            </div>
        )
    }
}

export default Food
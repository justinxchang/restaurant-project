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
            <div className="food-item" header={food.name}>
                    <div><strong>{food.name}</strong></div>
                    <div>${food.price} | {food.description}</div>
                    <Image className="food-image" src={food.image} thumbnail responsive/>
                    <br />
                    <button onClick={() => this.props.addToCart(food)}>Add to Order</button>

            </div>             
            </div>
        )
    }
}

export default Food
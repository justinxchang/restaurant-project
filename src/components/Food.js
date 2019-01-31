import React, {Component} from 'react'
import {Image} from 'react-bootstrap'
import './Food.css'

class Food extends Component {
    constructor(props) {
        super(props)

        this.state = {
            alert: ''
        }
    }

    render(){
        const {food} = this.props
        return (<div className='food-menu' key={food.id}>
            <div className="food-item" header={food.name}>
                    <div><strong>{food.name}</strong></div>
                    <Image className="food-image" src={food.image} thumbnail responsive/>
                    <div>{food.description}</div>
                    <div>${food.price}</div>
                    <br />
                    <button className='food-add' onClick={() => this.props.addToCart(food)}>Add to Order</button>
                    <br /><br />
            </div>             
            </div>
        )
    }
}

export default Food
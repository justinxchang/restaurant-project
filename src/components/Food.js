import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'


class Food extends Component {
    render(){
        return (
            <div>
                    <h5>{this.props.name}</h5>
                    <h6>{this.props.description}</h6>
                    <h6>${this.props.price}</h6>
                    {console.log(this.props)}
                    {/* <button onClick={() => this.addToOrder(this.props.food)}>Add to Order</button> */}
            </div>
        )
    }
}

export default Food
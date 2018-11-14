import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {addDrink, getFromOrders} from '../ducks/reducer'
import axios from 'axios'


class Orders extends Component {

    async componentDidMount(){
        let result = await axios.get('/api/getOrders')
        this.props.getFromOrders(result.data)    
    }

    render(){
        let orders = this.props.orders.map((order, i) => {
            return (
                <div key={order.id}>
                    <p>Name: {order.name}</p>              <p>Price: ${order.price}</p> 
                    <p>Quantity: {order.quantity}</p>
                    <p>Order Total: ${order.item_total}</p>
                </div>
            )
        })
        return (
            <div>
                {orders}
                Orders
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

const dispatchToProps = {
    getFromOrders
}


export default connect(mapStateToProps, dispatchToProps)(Orders)
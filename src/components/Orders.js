import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {} from '../ducks/reducer'
import axios from 'axios'


class Orders extends Component {

    async componentDidMount(){
        let result = await axios.get('/getOrders')
        this.props.getFromOrders(result.data)    
    }

    completed(order){

    }

    render(){
        let orders = this.props.orders.map((order, i) => {
            // if order_completed === tru
            // onClick, change css className that toggles?
            return (
                <div key={order.id}>

                    Order Num: {order.order_num} <p>Name: {order.name}</p> 
                    <button onClick={() => this.completed(order)}>Completed</button>            
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
    
}


export default connect(mapStateToProps, dispatchToProps)(Orders)
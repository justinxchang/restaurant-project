import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {updateOrders} from '../ducks/reducer'
import {Table, Grid, Row, Col, Glyphicon} from 'react-bootstrap'
import axios from 'axios'


class Orders extends Component {

    async componentDidMount(){
        let result = await axios.get('/getOrders')
        this.props.updateOrders(result.data)    
    }

    completed(order){

    }

    render(){
        let orders = this.props.orders.map((order, i) => {

            return (
                <tr key={order.id}>
                    <td>{order.order_num}</td>
                    <td>{order.name}</td>
                    <td>{order.quantity}</td>
                    <td><button>Mark Completed</button></td>
                </tr>
            )
        })
        return (
            <div>
            <Grid>
                <Row className="rrow">
                ORDERS
                <Table responsive bordered>
                    <thead>
                        <tr>
                        <th>ORDER #</th>
                        <th>ITEM</th>
                        <th>QUANTITY</th>
                        <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders}
                    </tbody>
                    </Table>              
                </Row>

            </Grid>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

const dispatchToProps = {
    updateOrders
}


export default connect(mapStateToProps, dispatchToProps)(Orders)
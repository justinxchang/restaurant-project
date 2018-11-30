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

    render(){
        let kitchenOrders = this.props.orders.filter(order => order.type === 'food').map((order, i) => {

            return (
                <tr key={order.id}>
                    <td>{order.order_num}</td>
                    <td>{order.name}</td>
                    <td>{order.quantity}</td>
                    <td><button>Mark Completed</button></td>
                </tr>
            )
        })

        let barOrders = this.props.orders.filter(order => order.type === 'drink' ).map((order, i) => {

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
            <button>Kitchen</button>
            <button>Bar</button>
            <Grid>
                <Row className="row">
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
                        {/* {kitchenOrders} */}
                        {barOrders}
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
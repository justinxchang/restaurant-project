import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateOrders} from '../ducks/reducer'
import {Table, Grid, Row, Tabs, Tab} from 'react-bootstrap'
import axios from 'axios'

class Orders extends Component {

    async componentDidMount(){
        let result = await axios.get('/getOrders')
        this.props.updateOrders(result.data)    
    }

    async ordersToCompleted(id){
        console.log('hit')
        let response = await axios.put(`/ordersToCompleted/${id}`)
        this.props.updateOrders(response.data)
    }

    render(){
        console.log(this.props.orders)
        let kitchenOrders = this.props.orders.filter(order => order.type === 'food').map((order, i) => {

            return (
                <tr key={order.id}>
                    <td>{order.order_num} </td>
                    <td>{order.name} </td>
                    <td>{order.quantity}</td>
                    <td><button onClick={() => this.ordersToCompleted(order.id)}>Mark Completed</button></td>
                </tr>
            )
        })

        let barOrders = this.props.orders.filter(order => order.type === 'drink' ).map((order, i) => {

            return (
                <tr key={order.id}>
                    <td>{order.order_num}</td>
                    <td>{order.name}</td>
                    <td>{order.quantity}</td>
                    <td><button onClick={() => this.ordersToCompleted(order.id)}>Mark Completed</button></td>
                </tr>
            )
        })

        return (
            <div>
            <Grid>
                <Row className="row">
                <Tabs className='foodMenuTabs' defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab className='foodMenuTabs' eventKey={1} title="Kitchen Orders">
                    <h3>ORDERS</h3>
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
                                {kitchenOrders}
                                {/* {barOrders} */}
                            </tbody>
                        </Table> 
                    </Tab>
                    <Tab eventKey={2}  title="Bar Orders">
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
                    </Tab>
                </Tabs>   
             
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
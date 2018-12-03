import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Table, Grid, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'

class MemberHistory extends Component {
    render() {
        console.log(this.props.memberHistory)
        let displayedMemberHistory = this.props.memberHistory.map((element) => {
            return (
                <tr>
                    <td>{element.order_num}</td>
                    <td>{element.name}</td>
                    <td>{element.price}</td>
                    <td>{element.quantity}</td>
                </tr>
            )

        })
        return (
            <Grid>
                <Row>
                    <br/> 
                    <Link to="/profile" ><button>Back to Profile</button></Link> <br/><br/>
                    <Table responsive bordered>
                        <thead>
                            <tr>
                                <th className='cart-price'>ORDER_NUM</th>
                                <th className='cart-name'>NAME</th>
                                <th className='cart-quantity'>PRICE</th>
                                <th className='cart-quantity'>QUANTITY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedMemberHistory}
                        </tbody>
                    </Table>
                </Row>
            </Grid>

        );
    }
}

function stateToProps(state) {
    return state;
}

export default connect(stateToProps)(MemberHistory);
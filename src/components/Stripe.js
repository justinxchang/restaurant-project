import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux'
import { updateCart} from '../ducks/reducer'

import axios from 'axios'
import {withRouter} from 'react-router-dom'

class Stripe extends React.Component {
  
  onToken = (token) => {
    let total = Math.round(parseFloat(this.props.total) * 100)
    token.card = void 0
    axios.post('/chargeCard', {token: token, amount: total}).then(res => {
      console.log(`/payment hit`)
      this.props.history.push('/foodmenu')
      
    }).catch(err => console.log(err))
    //     axios.get('/cartToOrders').then(res => {
    //       console.log(`how come this doesn't console log`)
    // }).catch(err => console.log(err))
    
  }
 
  render() {
    let total = (parseFloat(this.props.total) * 100)
    return (
      <StripeCheckout
        name="Stripe Checcout"
        description="Gettin paid"
        amount={total}
        token={this.onToken}
        stripeKey={process.env.REACT_APP_PUBLIC_KEY}
      />
    )
  }
} 

function mapStateToProps(state){
  return state
}

const dispatchToProps = {
  updateCart
}

const ConnectedStripe = connect(mapStateToProps, dispatchToProps)(Stripe)

export default withRouter(ConnectedStripe)
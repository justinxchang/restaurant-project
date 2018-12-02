import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux'
import { updateCart, updateUser} from '../ducks/reducer'

import axios from 'axios'
import {withRouter} from 'react-router-dom'

class Stripe extends React.Component {
  constructor(props){
    super(props)

    this.addPoints = this.addPoints.bind(this)
  }
  
  addPoints(){
    let points = Math.round(parseFloat(this.props.total) * 100)
    let id = this.props.user.id;
    console.log('points', points)
    if(this.props.user.id) {
      axios.post(`/addPoints/${id}`, {points})
      .then(() => console.log(`Added ${points} points to ${id}'s account`))
    }
  }

  onToken = (token) => {
    let total = Math.round(parseFloat(this.props.total) * 100)
    token.card = void 0
    //add points
    this.addPoints()
    axios.post('/chargeCard', {token: token, amount: total}).then(res => {
      console.log(`/payment hit`)
      this.props.history.push('/foodmenu')
      
    }).catch(err => console.log('replace with err'))    
  }


 
  render() {
    let total = (parseFloat(this.props.total) * 100)
    return (
      <StripeCheckout
        name="Angeleno Bar and Grille"
        description="Payment"
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
  updateCart,
  updateUser
}

const ConnectedStripe = connect(mapStateToProps, dispatchToProps)(Stripe)

export default withRouter(ConnectedStripe)
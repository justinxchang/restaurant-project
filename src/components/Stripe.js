import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux'
import { updateCart, updateUser } from '../ducks/reducer'
import SweetAlert from 'react-bootstrap-sweetalert'


import axios from 'axios'
import { withRouter } from 'react-router-dom'

class Stripe extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      alert: ''
    }

    this.addPoints = this.addPoints.bind(this)
  }

  addPoints() {
    let points = Math.round(parseFloat(this.props.total) * 100)
    let id = this.props.user.id;
    console.log('points', points)
    if (this.props.user.id) {
      axios.post(`/addPoints/${id}`, { points })
        .then((res) =>
          // console.log(res.data)
          this.props.updateUser(res.data[0])
        )
      console.log(this.props.user)
    }
    console.log(`Added ${points} points to ${id}'s account`)
  }

  onToken = (token) => {
    let total = Math.round(parseFloat(this.props.total) * 100)
    token.card = void 0
    //add points
    this.addPoints()
    axios.post('/chargeCard', { token: token, amount: total }).then(res => {
      console.log(`/payment hit`)
      this.props.history.push('/foodmenu')

    }).catch(err => console.log('replace with err'))
    this.setState({ alert: `Added ${total} rewards points to your account!` })
  }



  render() {
    let total = (parseFloat(this.props.total) * 100)
    return (
      <div>
        < StripeCheckout
          name="Angeleno Bar and Grille"
          description="Payment"
          amount={total}
          token={this.onToken}
          stripeKey={process.env.REACT_APP_PUBLIC_KEY}

        />
        <div>
          {this.state.alert &&
            <SweetAlert title={this.state.alert} onConfirm={() => this.setState({ alert: '' })} />
          }
        </div>

      </div>
    )

  }
}

function mapStateToProps(state) {
  return state
}

const dispatchToProps = {
  updateCart,
  updateUser
}

const ConnectedStripe = connect(mapStateToProps, dispatchToProps)(Stripe)

export default withRouter(ConnectedStripe)
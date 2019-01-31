import React, {Component} from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';

class Checkout extends Component {
    onToken = (token) => {
        axios.get('/payment').then(response => {
            alert(`We are in business, ${response.data.email}`);
        });
      }

      render() {
        return (
          <div>
              Checkout
              <StripeCheckout
                token={this.onToken}
                stripeKey="pk_test_R31TpziCaAwWFj2EYrORkAtj"
              />
          </div>
        )
      }
}

export default Checkout
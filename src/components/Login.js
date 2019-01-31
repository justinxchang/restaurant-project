import React, { Component } from 'react';
import axios from 'axios'
import {Grid, Row} from 'react-bootstrap'

class Login extends Component {

  state = {
      name: '',
      email: '',
      password: '',
      isAdmin: false,
  }

  async login(){
      if(!this.state.email || !this.state.password){
          return alert(`Please fill out email and password.`)
      }
      console.log(this.state)
      let res = await axios.post('/auth/login', {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,

      })
      console.log(res)
      if(res.data.message === 'Logged In'){
          this.props.history.push('/profile') 
      } else {
          alert(res.data.message) 
      }
  }

  async signup(){
      if(!this.state.email || !this.state.password){
          return alert(`Please fill out email and password.`)
      }
      let res = await axios.post('/auth/signup', {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
      })
      console.log(res)
      if(res.data.message === 'Logged In'){
          this.props.history.push('/profile')
      } else {
          alert(res.data.message)
      }
  }

  render(){
      return (
          <Grid>
              <Row className="row-shadow">
                  
                <div className='login-container'>
                    <form>
                        <div>
                            <h2>REWARDS MEMBERS</h2><br/>
                            <p className="points-info">Earn more points with every order! For every dollar that you spend, you will earn 100 rewards points. Once you've earned 25000 points, you can redeem a $25.00 gift card towards your next visit!</p><br/>
                            <label> Email: </label>
                            <br />
                            <input onChange={event => this.setState({email: event.target.value})} type='email' />
                        </div>
                        <div>
                            <label>Password: </label>
                            <br />
                            <input onChange={event => this.setState({password: event.target.value})}type='password' />
                        </div>
                        <br/>
                        <button onClick={() => this.login()} type='button'>Login</button> <span>   </span> 
                        <button onClick={() => this.signup()} type='button'>Signup</button>
                        <br />
                        <h6>(Log in with Email: staff@abg.com, Password: "spacebar" to view as a staff member)</h6>
                    </form>
                </div>
              </Row>
          </Grid>
      )
  }
}

export default Login
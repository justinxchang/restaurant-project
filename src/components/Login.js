import React, { Component } from 'react';
import axios from 'axios'
import {Grid, Row} from 'react-bootstrap'

class Login extends Component {

  state = {
      name: '',
      email: '',
      password: ''
  }

  async login(){
      if(!this.state.email || !this.state.password){
          return alert(`Please fill out email and password.`)
      }
      console.log(this.state)
      let res = await axios.post('/auth/login', {
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
                            <label> Name: </label>
                            <br />
                            <input onChange={event => this.setState({name: event.target.value})} type='text' />
                        </div>
                        <div>
                            <label> Email: </label>
                            <br />
                            <input onChange={event => this.setState({email: event.target.value})} type='email' />
                        </div>
                        <div>
                            <label>Password: </label>
                            <br />
                            <input onChange={event => this.setState({password: event.target.value})}type='password' />
                        </div>
                        <button onClick={() => this.login()} type='button'>Login</button>
                        <button onClick={() => this.signup()} type='button'>Signup</button>
                    </form>
                </div>
              </Row>
          </Grid>
      )
  }
}

export default Login
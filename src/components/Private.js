import React, {Component} from 'react'
import axios from 'axios'
import {updateUser} from '../ducks/reducer'
import {connect} from 'react-redux'

class Private extends Component {

    async componentDidMount () {
        let res = await axios.get('/api/user-data');
        console.log(res)
        this.props.updateUser(res.data)
    }

    render(){
        return (
            // let {user} = this.props
            <div>
                <h1>Account Information</h1>
                <hr/><hr/><hr/>
                {
                    this.props.user.email ? (
                        <div>
                            <p>Account Holder: Justin Chang</p>
                            <p>Account Number: 124321453451</p>
                            <p>Account Email: {this.props.user.email}</p>
                            <p>Balance: {Math.floor((Math.random() + 1) * 100)}</p>
                        </div>
                    ) : <p>Please Log In</p>
                }
                    <a href="http://localhost:4040/auth/logout">                           
                        <button>Logout</button>
                    </a>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('redux store state:', state)
    return state;
    //user: state.user?
}

// this is what is happening with mapStateToProps
// this.props = {...reduxStateObj}
// we're adding the entire redux state, which is an object, onto this.props
// this makes everything in the redux state available to be used as props


export default connect(mapStateToProps, {updateUser: updateUser}) (Private)
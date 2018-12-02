import React, {Component} from 'react'
import axios from 'axios'
import {updateUser} from '../ducks/reducer'
import {connect} from 'react-redux'

class Profile extends Component {

    async componentDidMount () {
        let res = await axios.get('/api/user-data');
        console.log(res)
        this.props.updateUser(res.data)
        console.log("user info", this.props.user)
    }

    render(){
        return (
            <div>
                <h1>Rewards Member Info</h1>
                {
                    this.props.user.email ? (
                        <div>
                            <p>Email: {this.props.user.email}</p>
                            <p>Points: {this.props.user.points}</p>                        </div>
                    ) : <p>Please Log In</p>
                }
                    <a href={process.env.REACT_APP_LOGOUT}>                           
                        <button>Logout</button>
                    </a>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('redux store state:', state)
    return state;
}

// this is what is happening with mapStateToProps
// this.props = {...reduxStateObj}
// we're adding the entire redux state, which is an object, onto this.props
// this makes everything in the redux state available to be used as props


export default connect(mapStateToProps, {updateUser: updateUser}) (Profile)
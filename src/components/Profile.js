import React, { Component } from 'react'
import axios from 'axios'
import { updateUser, updateMemberHistory } from '../ducks/reducer'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Grid, Row } from 'react-bootstrap'
import SweetAlert from 'react-bootstrap-sweetalert'


class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isAdmin: false,
            alert: ''
        }
        this.redeemPoints = this.redeemPoints.bind(this)
    }

    async componentDidMount() {
        let res = await axios.get('/api/user-data');
        this.props.updateUser(res.data)
        console.log("user info", this.props.user)
        this.setState({ isAdmin: this.props.user.admin })
    }

    redeemPoints() {
        let id = this.props.user.id
        axios.get(`/redeemPoints/${id}`)
            .then((res) => {
                this.props.updateUser(res.data)
                console.log(res.data)
            })
        console.log('props', this.props.user.email)
        this.setState({ alert: `Gift Card Redeemed!` })
    }

    checkMemberHistory(){
        let id = this.props.user.id
        axios.get(`/getMemberHistory/${id}`)
            .then((res) => {
                this.props.updateMemberHistory(res.data)
                console.log('function redux',this.props.updateMemberHistory)
            })
            console.log(this.props.memberHistory)
            this.props.history.push('/memberHistory')
    }

    render() {
        let { isAdmin } = this.state;
        if (!isAdmin) {
            return (
                <Grid>
                    <Row>
                        <div>
                            {this.state.alert &&
                                <SweetAlert title={this.state.alert} onConfirm={() => this.setState({ alert: '' })} />
                            }
                            <h2>Rewards Member Info</h2><br />
                            {
                                this.props.user.email ? (
                                    <div>
                                        <p>Rewards Member: <strong>{this.props.user.email}</strong></p><br />
                                        <p className="points-info">You currently have <strong>{this.props.user.points}</strong> rewards points. You can earn more points with each order that you place! For every dollar that you spend, you will earn 100 rewards points. For every 25000 points that you earn, you can redeem a $25.00 gift card towards your next visit!</p>
                                        <br /><br />
                                        <button onClick={() => this.checkMemberHistory()}>Check Order History</button><br/>
                                        <button onClick={() => this.redeemPoints()}>Redeem Rewards Points</button><br /><br />
                                        <p>(Please request a staff member before redeeming your points)</p>
                                        <br /><br />
                                    </div>
                                ) : <div>
                                        <p>Please Log In</p>
                                        <Link to="/login"><button>Login</button></Link>
                                    </div>

                            }
                            <a href={process.env.REACT_APP_LOGOUT}>
                                <button>Logout</button>
                            </a>
                            <br />
                            <br />
                        </div>
                    </Row>
                </Grid>
            )
        } else {
            return (
                <Grid>
                    <Row>
                        <div>
                            <h3>STAFF LOGIN</h3><br/>

                            <Link to="/orders"><button className="staff-button">Orders</button></Link><br/><br/>
                            <Link to="/chart"><button className="staff-button">Chart</button></Link><br/><br/>
                            <Link to="/addform"><button className="staff-button">Add Form</button></Link><br/><br/>
                            <p>Email: {this.props.user.email}</p>


                            {/* {
                                this.props.user.email ? (
                                    <div>
                                        <p>Email: {this.props.user.email}</p>
                                        <p>Points: {this.props.user.points}</p>                        </div>
                                ) : <div>
                                        <p>Please Log In</p>
                                        <Link to="/login"><button>Login</button></Link>
                                        <Link to="/profile"><button>Profile</button></Link>

                                    </div>
                            } */}
                            <a href={process.env.REACT_APP_LOGOUT}>
                                <button>Logout</button>
                                <br/> <br/>
                            </a>
                        </div>
                    </Row>
                </Grid>
            )
        }
    }
}

function mapStateToProps(state) {
    console.log('redux store state:', state)
    return state;
}

const dispatchToProps = {
    updateUser,
    updateMemberHistory
}


// this is what is happening with mapStateToProps
// this.props = {...reduxStateObj}
// we're adding the entire redux state, which is an object, onto this.props
// this makes everything in the redux state available to be used as props

export default connect(mapStateToProps, dispatchToProps )(Profile)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Food from './Food'
import axios from 'axios';
import { updateFoodMenu, updateUser } from '../ducks/reducer'
import { Grid, Row, Tabs, Tab } from 'react-bootstrap'
// import './Food.css'
import { sortByCategory } from './sorter';
import SweetAlert from 'react-bootstrap-sweetalert'

class FoodMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            alert: ''
        }

        this.addToCart = this.addToCart.bind(this)
    }

    async componentDidMount() {
        let res = await axios.get('/getAllFood')
        this.props.updateFoodMenu(res.data)
    }

    async addToCart(foodObj) {
        let id = this.props.user.id;
        let { name, price, type } = foodObj
        let res = await axios.post('/addToCart', { name, price, type, member_id: id })
        console.log(res)
        console.log(`Added ${foodObj.name} to order.`)
        this.setState({ alert: `Added ${foodObj.name} to order.` })
    }

    render() {
        let sortedData = sortByCategory(this.props.foodMenu)
        let foodMenu = []
        for (let key in sortedData) {
            foodMenu.push(
                <div key={key}>
                    <h3 className="item-name">{key.toUpperCase()}</h3>
                    <br />
                    <br />
                    <div className="testdiv">
                        {
                            sortedData[key].map(food => {
                                return (
                                    <div key={food.id} className="food-menu">
                                        <Food key={food.id} food={food} addToCart={this.addToCart} />
                                        <hr />
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            )
        }

        return (
            <Grid>
                <Row className='foodMenuTabs'>
                    <Tabs className='foodMenuTabs' defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab className='foodMenuTabs' eventKey={1} title="Display All">{foodMenu}</Tab>
                        <Tab eventKey={2} title="Snacks">{foodMenu[0]}</Tab>
                        <Tab eventKey={3} title="Appetizers">{foodMenu[1]}</Tab>
                        <Tab eventKey={4} title="Soup & Salad">{foodMenu[2]}</Tab>
                        <Tab eventKey={5} title="House Favorites">{foodMenu[3]}</Tab>
                        <Tab eventKey={6} title="Steaks">{foodMenu[4]}</Tab>
                        <Tab eventKey={7} title="Seafood">{foodMenu[5]}</Tab>
                        <Tab eventKey={8} title="Pizzas">{foodMenu[6]}</Tab>
                        <Tab eventKey={9} title="Burgers">{foodMenu[7]}</Tab>
                        <Tab eventKey={10} title="Sandwiches">{foodMenu[8]}</Tab>
                        <Tab eventKey={11} title="Desserts">{foodMenu[9]}</Tab>
                        <Tab eventKey={12} title="Kids">{foodMenu[10]}</Tab>
                    </Tabs>
                </Row>
                {this.state.alert &&
                    <SweetAlert title={this.state.alert} onConfirm={() => this.setState({ alert: '' })} />
                }
                <a className="carousel-control left" role="button" to='/drinkmenu' href="#/drinkmenu"><span className="glyphicon glyphicon-chevron-left"></span><span className="sr-only">Previous</span></a>
                <a className="carousel-control right" role="button" to='/cart' href="#/cart"><span className="glyphicon glyphicon-chevron-right"></span><span className="sr-only">Next</span></a>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return state
}

const dispatchToProps = {
    updateFoodMenu,
    updateUser
}

export default connect(mapStateToProps, dispatchToProps)(FoodMenu)
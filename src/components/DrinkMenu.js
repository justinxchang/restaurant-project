import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios';
import { updateDrinkMenu } from '../ducks/reducer'
import { Grid, Row, Tabs, Tab } from 'react-bootstrap'
import './DrinkMenu.css'
import Drinks from './Drinks'
import { sortByCategory } from './sorter'
import SweetAlert from 'react-bootstrap-sweetalert'


class DrinkMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: '',
            alert: ''
        }

        this.addToCart = this.addToCart.bind(this)
    }

    async componentDidMount() {
        let res = await axios.get('/getAllDrinks')
        this.props.updateDrinkMenu(res.data)
    }

    async addToCart(drinkObj) {
        let id = this.props.user.id;
        let { name, price, type } = drinkObj
        let res = await axios.post('/addToCart', { name, price, type, member_id: id })
        console.log(`Added ${drinkObj.name} to order.`)
        this.setState({ alert: `Added ${drinkObj.name} to order.` })
    }

    render() {

        let sortedData = sortByCategory(this.props.drinkMenu)
        console.log(this.props.DrinkMenu)

        let searchedDrink = this.props.drinkMenu.filter((drink, i) => {
            return (
                drink.name.includes(this.state.search)
            )
        }).map((drink, i) => {
            return (
                <div key={drink.id} className="drink-menu">
                    <Drinks key={drink.id} drink={drink} addToCart={this.addToCart} />

                </div>
            )
        })
        console.log(searchedDrink)
        let drinkMenu = []
        for (let key in sortedData) {
            drinkMenu.push(
                <div key={key}>
                    <h3 className="item-name">{key.toUpperCase()}</h3>
                    {
                        sortedData[key].map(drink => {
                            return (
                                <div key={drink.id} className="drink-menu">
                                    <Drinks key={drink.id} drink={drink} addToCart={this.addToCart} />
                                </div>
                            )
                        })
                    }
                </div>
            )
        }



        return (
            <Grid>
                <Row className='drinkMenuTabs'>
                    <Tabs className='drinkMenuTabs' defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab className='drinkMenuTabs' eventKey={1} title="Display All">
                            <input placeholder="search for drink" type="text" onChange={(event) => {
                                let uppercase = event.target.value.toUpperCase()
                                this.setState({ search: uppercase })
                            }}></input>
                            
                            {this.state.search ? searchedDrink : drinkMenu}
                            {/* {searchedDrink}{drinkMenu} */}
                            
                            </Tab>
                        <Tab eventKey={2} title="WHEAT | WIT | WEISS">{drinkMenu[0]}</Tab>
                        <Tab eventKey={3} title="FRUIT | LAMBIC | SOUR">{drinkMenu[1]}</Tab>
                        <Tab eventKey={4} title="MALTY | BALANCED">{drinkMenu[2]}</Tab>
                        <Tab eventKey={5} title="HOPPY | FLORAL">{drinkMenu[3]}</Tab>
                        <Tab eventKey={6} title="STRONG | DARK">{drinkMenu[4]}</Tab>
                        <Tab eventKey={7} title="LIGHT">{drinkMenu[5]}</Tab>
                        <Tab eventKey={8} title="REFRESHING | CRISP">{drinkMenu[6]}</Tab>
                        <Tab eventKey={9} title="DARK | ROASTED">{drinkMenu[7]}</Tab>
                        <Tab eventKey={10} title="STRONG | SPICED">{drinkMenu[8]}</Tab>
                        <Tab eventKey={11} title="CIDER">{drinkMenu[9]}</Tab>
                        <Tab eventKey={12} title="SEASONAL">{drinkMenu[10]}</Tab>
                    </Tabs>
                </Row>
                {this.state.alert &&
                    <SweetAlert title={this.state.alert} onConfirm={() => this.setState({ alert: '' })} />
                }
                <a className="carousel-control left" role="button" to='/' href="#"><span className="glyphicon glyphicon-chevron-left"></span><span className="sr-only">Previous</span></a>
                <a className="carousel-control right" role="button" to='/foodemnu' href="#/foodmenu"><span className="glyphicon glyphicon-chevron-right"></span><span className="sr-only">Next</span></a>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return state
}

const dispatchToProps = {
    updateDrinkMenu
}

export default connect(mapStateToProps, dispatchToProps)(DrinkMenu)
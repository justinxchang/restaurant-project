import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import Food from './Food'
import axios from 'axios';
import {updateDrinkMenu} from '../ducks/reducer'
import {Button, Modal, Col, Image} from 'react-bootstrap'
import './DrinkMenu.css'
import Drinks from './Drinks'

class DrinkMenu extends Component {
    constructor(props, context) {
        super(props, context);
        
        // this.state = {
        //   show: false
        // };

        this.handleHide = this.handleHide.bind(this);
    
    }
    
    handleHide() {
        this.setState({ show: false });
    }

    async componentDidMount(){
        let res = await axios.get('/getAllDrinks')
        this.props.updateDrinkMenu(res.data)
    }

    async addToCart(drinkObj){
        let res = await axios.post('/addToCart', drinkObj)
        console.log(`Added ${drinkObj.name} to order.`)
    } 
 
    render(){
        // let drinkList = this.props.drinkMenu.map((drink) => {
            let drinkList = this.props.drinkMenu.map((drink) => (<Drinks drink={drink} addToCart={this.addToCart}/>));
            // return (
                // <div>
                //     <h2>Drink Menu</h2>
                //     <div>
                //         {drinkList}
                //     </div>
                // </div>
                // <div key={drink.id}>
                //     <h5>{drink.name}</h5>
                //     <h6>${drink.price}</h6>

                //     <span
                //         onClick={() => this.setState({ show: true })}
                //         >
                //         <strong>More Info</strong>
                //         <br />
                //         <button onClick={() => this.addToCart(drink)}>Add to Order</button>

                //     </span>

                //     <Modal
                //         show={this.state.show}
                //         onHide={this.handleHide}
                //         container={this}
                //         aria-labelledby="contained-modal-title"
                //         >
                //         <Modal.Header closeButton>
                //             <Modal.Title id="contained-modal-title">
                //             {drink.name}
                //             </Modal.Title>
                //         </Modal.Header>
                //         <Modal.Body>
                //             <p>{drink.sub_category} | ABV {drink.abv}% | {drink.origin}</p>
                //             <Col xs={6} md={4}>
                //             <Image className="drink-logo" src={drink.logo} thumbnail />
                //             </Col>
                //             <p className="drink-description"><strong>Description</strong><br/>{drink.description}</p>
                //             <p href={drink.website}>Website</p>
                //         </Modal.Body>
                //         <Modal.Footer>
                //             <Button onClick={this.handleHide}>Close</Button>
                //         </Modal.Footer>
                //     </Modal>
                // </div>
        //     )
        // }

        return (
            <div>
                <h2>Drink Menu</h2>
                <div>
                    {drinkList}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

const dispatchToProps = {
    updateDrinkMenu
}

export default connect(mapStateToProps, dispatchToProps)(DrinkMenu)
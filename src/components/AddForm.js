import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'


class AddForm extends Component {
    
    state = {
        foodMenu: [],
        foods: {},
        foodName: '',
        foodDescription: '',
        foodPrice: 0,
        foodCategory: '',
        drinkMenu: [],
        drinks: {},
        drinkName: '',
        drinkDescription: '',
        drinkPrice: 0,
        drinkCategory: '',
        num: 0
    }

    addToDB(){
        axios.post('/createfood', {
            foodName: this.state.foodName,
            foodDescription: this.state.foodDescription,
            foodPrice: this.state.foodPrice,
            foodCategory: this.state.foodCategory
        })
        .then(res => this.setState({foods: res.data}))
    }

    
    render(){
        return (
            <div>

                <div>
                    <h1>Add Form</h1>

                    Food Name:
                    <input type='text' onChange={(event) => this.setState({foodName: event.target.value})} />
                    {this.state.foodName}
                    <br />
                    Food Description:
                    <input type='text' onChange={(event) => this.setState({foodDescription: event.target.value})} />
                    <br />
                    Food Price:
                    <input type='text' onChange={(event) => this.setState({foodPrice: event.target.value})} />
                    <br />
                    Food Category:
                    <input type='text' onChange={(event) => this.setState({foodCategory: event.target.value})} />
                    <br />
                    <br />
                    <button onClick={() => this.addToDB()}>Add to Database</button>
                </div>
                <div>
                    Drink Name:
                    <input type='text' onChange={(event) => this.setState({drinkName: event.target.value})} />
                    {this.state.drinkName}
                    <br />
                    Drink Description:
                    <input type='text' onChange={(event) => this.setState({drinkDescription: event.target.value})} />
                    <br />
                    Drink Price:
                    <input type='text' onChange={(event) => this.setState({drinkPrice: event.target.value})} />
                    <br />
                    Drink Category:
                    <input type='text' onChange={(event) => this.setState({drinkCategory: event.target.value})} />
                    <br />
                    <br />
                    <button onClick={() => this.addToDB()}>Add to Database</button>
                </div>
            </div>
        )
    }
}

export default AddForm
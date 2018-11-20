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
        drinkSubcategory: '',
        drinkABV: '',
        drinkOrigin: '',
        num: 0
    }

    createFood(){
        axios.post('/createFood', {
            foodName: this.state.foodName,
            foodDescription: this.state.foodDescription,
            foodPrice: this.state.foodPrice,
            foodCategory: this.state.foodCategory
        })
        .then(res => this.setState({foods: res.data}))
        console.log(`Added ${this.state.foodName} to database`)
    }

    createDrink(){
        axios.post('/createDrink', {
            drinkName: this.state.drinkName,
            drinkDescription: this.state.drinkDescription,
            drinkPrice: this.state.drinkPrice,
            drinkCategory: this.state.drinkCategory,
            drinkSubcategory: this.state.drinkSubcategory,
            drinkABV: this.state.drinkABV,
            drinkOrigin: this.state.drinkOrigin,
        })
        .then(res => this.setState({drinks: res.data}))
        console.log(`Added ${this.state.drinkName} to database`)
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
                    <button onClick={() => this.createFood()}>Add to Database</button>
                    <br />
                    <br />
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
                    Drink Sub Category:
                    <input type='text' onChange={(event) => this.setState({drinkSubcategory: event.target.value})} />
                    <br />
                    Drink ABV:
                    <input type='text' onChange={(event) => this.setState({drinkABV: event.target.value})} />
                    <br />
                    Drink Origin:
                    <input type='text' onChange={(event) => this.setState({drinkOrigin: event.target.value})} />
                    <br />
                    <br />
                    <button onClick={() => this.createDrink()}>Add to Database</button>
                </div>
            </div>
        )
    }
}

export default AddForm
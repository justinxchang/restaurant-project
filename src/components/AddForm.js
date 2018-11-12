import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import Drinks from './Drinks'


class AddForm extends Component {
    
    state = {
        drinkmenu: [],
        drinks: {},
        foodmenu: [],
        foods: {},
        foodName: '',
        foodDescription: '',
        foodPrice: 0,
        foodCategory: ''
    }

    addToDB(){
        axios.post('/api/createfood', {
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
                <h1>Add Form</h1>

                Food Name:
                <input type='text' onChange={(event) => this.setState({foodName: event.target.value})} />
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
                <button onClick={() => this.addToDB()}>Add to Database</button>
            </div>
        )
    }
}

export default AddForm
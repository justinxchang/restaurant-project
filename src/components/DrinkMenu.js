import React, {Component} from 'react'
// import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {addDrink} from '../ducks/reducer'
// import Drinks from './Drinks'



class DrinkMenu extends Component {
    
    state = {
        drinkmenu: [],
        drinks: {},

    }

    // function addDrink(id){
    
    render(){
        return (
            <div>
                drinks go here
                
            </div>
        )
    }
}

export default connect(null,)(DrinkMenu)
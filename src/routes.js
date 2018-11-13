import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home' 
import FoodMenu from './components/FoodMenu'
import DrinkMenu from './components/DrinkMenu'
import AddForm from './components/AddForm'
import Cart from './components/Cart'

export default (
    <Switch>
        <Route component={Home} exact path='/'/>
        <Route component={DrinkMenu} path='/drinkmenu'/>
        <Route component={FoodMenu} path='/foodmenu'/>
        <Route component={AddForm} path='/addform'/>
        <Route component={Cart} path='/cart'/>

    </Switch>
)

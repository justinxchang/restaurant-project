import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home' 
import FoodMenu from './components/FoodMenu'
import DrinkMenu from './components/DrinkMenu'
import AddForm from './components/AddForm'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Orders from './components/Orders'
import Login from './components/Login'
import Profile from './components/Profile'
import Chart from './components/Chart'
import MemberHistory from './components/MemberHistory'

export default (
    <Switch>
        <Route component={Home} exact path='/'/>
        <Route component={DrinkMenu} path='/drinkmenu'/>
        <Route component={FoodMenu} path='/foodmenu'/>
        <Route component={AddForm} path='/addform'/>
        <Route component={Cart} path='/cart'/>
        <Route component={Checkout} path='/checkout'/>
        <Route component={Orders} path='/orders'/>
        <Route component={Login} path='/login'/>
        <Route component={Profile} path='/profile'/>
        <Route component={Chart} path='/chart'/>
        <Route component={MemberHistory} path='/memberHistory'/>
    </Switch>
)

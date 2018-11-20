import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'


class Home extends Component {
    render(){
        return (
            <div>
                <img src="https://images.unsplash.com/photo-1519859570182-99a448c5775a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=05ecf12ae3fc8fd626ff8b39b387a658&auto=format&fit=crop&w=800&q=60" />
            </div>
        )
    }
}

export default Home
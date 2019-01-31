import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { Carousel } from 'react-bootstrap'
import './Home.css'
import Image1 from '../images/brewery-1.jpg'
import Image2 from '../images/brewery-2.jpg'
import Image3 from '../images/brewery-3.jpg'


class Home extends Component {
    render() {
        return (
            <>
                <Carousel>
                    <Carousel.Item>
                        <div className="carousel-image">
                            <img src={Image1} />
                            <Link className="get-started-button" to='/drinkMenu'>
                                <button className='carousel-button'>Get Started</button></Link>

                        </div>
                        <Carousel.Caption>
                            {/* <div className="carousel-caption">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-image">
                            <img src={Image2} />
                            <Link className="get-started-button" to='/drinkMenu'>
                                <button className='carousel-button'>Get Started</button></Link>
                        </div>
                        <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-image">
                            <img src={Image3}/>
                            <Link className="get-started-button" to='/drinkMenu'>
                                <button className='carousel-button'>Get Started</button></Link>
                        </div>
                        <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                {/* <Link className="get-started-button" to='/drinkMenu'> 
                <button className='carousel-button'>Get Started</button></Link> */}
            </>

        )
    }
}

export default Home
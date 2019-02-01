import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap'
// import './Home.css'
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
                            <img src={Image1} alt='brewery1'/>
                            <Link className="get-started-button" to='/drinkMenu'>
                                <button className='carousel-button'>Get Started</button></Link>

                        </div>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-image">
                            <img src={Image2} alt='brewery2'/>
                            <Link className="get-started-button" to='/drinkMenu'>
                                <button className='carousel-button'>Get Started</button></Link>
                        </div>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-image">
                            <img src={Image3} alt='brewery3'/>
                            <Link className="get-started-button" to='/drinkMenu'>
                                <button className='carousel-button'>Get Started</button></Link>
                        </div>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>

        )
    }
}

export default Home
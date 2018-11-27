import React, { Component } from 'react';
import {Modal, Col, Image, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Drinks extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            show: false,
        }

        this.handleHide = this.handleHide.bind(this);
    }

    handleHide() {
        this.setState({ show: false });
    }
    
    render() {
        const { drink } = this.props;
        return (<div key={drink.id}>
            <h5>{drink.name}</h5>
            <h6>${drink.price}</h6>
            <span
                onClick={() => this.setState({ show: true })}
            >
                <strong>More Info</strong>
            </span>
                <br /><br />
                <button onClick={() => this.props.addToCart(drink)}>Add to Order</button>

            <Modal
                show={this.state.show}
                onHide={this.handleHide}
                container={this}
                aria-labelledby="contained-modal-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">
                        {drink.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{drink.sub_category} | ABV {drink.abv}% | {drink.origin}</p>
                    <Col xs={6} md={4}>
                        <Image className="drink-logo" src={drink.logo} thumbnail />
                    </Col>
                    <p className="drink-description"><strong>Description</strong><br />{drink.description}</p>
                    <br /><br />
                    <a href={drink.website}>Website</a>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>);
    }
}

export default Drinks
import React, { Component } from 'react';
import {Modal, Col, Image, Button} from 'react-bootstrap'

class Drinks extends Component {
    constructor(props) {
        super(props);
        this.handleHide = this.handleHide.bind(this);
        this.state = {
            show: false,
        }
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
                <br />
                <button onClick={() => this.props.addToCart(drink)}>Add to Order</button>
            </span>
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
                    <p href={drink.website}>Website</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>);
    }
}

export default Drinks
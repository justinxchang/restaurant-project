import React, { Component } from 'react'
import axios from 'axios'
import { Grid, Row, Table } from 'react-bootstrap'

class AddForm extends Component {

    state = {
        foodMenu: [],
        foods: {},
        foodName: '',
        foodDescription: '',
        foodPrice: 0,
        foodImage: '',
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
        drinkWebsite: '',
        drinkLogo: '',
        num: 0
    }

    createFood() {
        axios.post('/createFood', {
            foodName: this.state.foodName,
            foodDescription: this.state.foodDescription,
            foodPrice: this.state.foodPrice,
            foodImage: this.state.foodImage,
            foodCategory: this.state.foodCategory
        })
            .then(res => this.setState({ foods: res.data }))
        console.log(`Added ${this.state.foodName} to database`)
    }

    createDrink() {
        axios.post('/createDrink', {
            drinkName: this.state.drinkName,
            drinkDescription: this.state.drinkDescription,
            drinkPrice: this.state.drinkPrice,
            drinkCategory: this.state.drinkCategory,
            drinkSubcategory: this.state.drinkSubcategory,
            drinkABV: this.state.drinkABV,
            drinkOrigin: this.state.drinkOrigin,
            drinkWebsite: this.state.drinkWebsite,
            drinkLogo: this.state.drinkLogo,
        })
            .then(res => this.setState({ drinks: res.data }))
        console.log(`Added ${this.state.drinkName} to database`)
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Row>
                        <h2>ADD FORM</h2><br />

                        <Table className="add-form-table" responsive bordered>
                            <tbody>
                                <tr>
                                    <td>Food Name</td>
                                    <td>
                                        <input type='text' onChange={(event) => this.setState({ foodName: event.target.value })} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Food Description</td>
                                    <td>
                                        <input type='text' onChange={(event) => this.setState({ foodDescription: event.target.value })} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Food Price</td>
                                    <td>
                                        <input type='text' onChange={(event) => this.setState({ foodPrice: event.target.value })} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Food Image</td>
                                    <td>
                                        <input type='text' onChange={(event) => this.setState({ foodImage: event.target.value })} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Food Category</td>
                                    <td>
                                        <input type='text' onChange={(event) => this.setState({ foodCategory: event.target.value })} />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <button onClick={() => this.createFood()}>Add to Food Menu</button><br /><br /> <br />
                        <Table className="add-form-table" responsive bordered>
                            <tbody>
                                <tr>
                                    <td>Drink Name</td>
                                    <td>
                                        <input type='text' onChange={(event) => this.setState({ drinkName: event.target.value })} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Drink ABV</td>
                                    <td>
                                        <input type='text' onChange={(event) => this.setState({ drinkABV: event.target.value })} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Drink Origin</td>
                                    <td>
                                        <input type='text' onChange={(event) => this.setState({ drinkOrigin: event.target.value })} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Drink Description</td>
                                    <td>
                                        <input type='text' onChange={(event) => this.setState({ drinkDescription: event.target.value })} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Drink Subcategory</td>
                                    <td>
                                        <input type='text' onChange={(event) => this.setState({ drinkSubcategory: event.target.value })} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Drink Category</td>
                                    <td>
                                        <input type='text' onChange={(event) => this.setState({ drinkCategory: event.target.value })} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Drink Website</td>
                                    <td>
                                        <input type='text' onChange={(event) => this.setState({ drinkWebsite: event.target.value })} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Drink Logo</td>
                                    <td>
                                        <input type='text' onChange={(event) => this.setState({ drinkLogo: event.target.value })} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Drink Price</td>
                                    <td>
                                        <input type='text' onChange={(event) => this.setState({ drinkPrice: event.target.value })} />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <button onClick={() => this.createDrink()}>Add to Drink Menu</button><br /> <br />

                    </Row>
                </Row>
            </Grid>
        )
    }
}

export default AddForm
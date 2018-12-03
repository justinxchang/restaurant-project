require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const massive = require('massive')
const ctrl = require('./controller')

const app = express();
const {
    SERVER_PORT,
    CONNECTION_STRING,
    SECRET,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET
    } = process.env

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    //app.listen can go here to (try this if you're having issues with the database not loading before componentDidMount does. this may cause additional side effects)  
console.log('Connected to the db')
})

// // middleware
app.use(express.json())         //bodyparser
app.use(session({
    secret: SECRET,
    resave: false,
    saveUnitialized: false
}))
app.use( express.static( `${__dirname}/../build` ) );

app.post('/createFood', ctrl.createFood)
app.post('/createDrink', ctrl.createDrink)
app.get('/getAllFood', ctrl.getAllFood)
app.get('/getAllDrinks', ctrl.getAllDrinks)
app.post('/addToCart', ctrl.addToCart)
app.get('/getFromCart', ctrl.getFromCart)
app.delete('/deleteFromCart/:id', ctrl.deleteFromCart)
app.put('/editQuantity/:id', ctrl.editQuantity)
app.get('/getTotal', ctrl.getTotal) 
app.post('/chargeCard', ctrl.chargeCard)
app.get('/getOrders', ctrl.getOrders)
app.post('/addPoints/:id', ctrl.addPoints)
app.get('/redeemPoints/:id', ctrl.redeemPoints)
app.put('/ordersToCompleted/:id', ctrl.ordersToCompleted)
// app.get('/cartToOrders', ctrl.cartToOrders)
app.get('/getMemberHistory/:id', ctrl.getMemberHistory)

app.get('/getOrderQuantities', ctrl.getOrderQuantities)

app.post('/auth/signup', ctrl.signup)
app.post('/auth/login', ctrl.login)
app.get('/api/user-data', ctrl.userData)
app.get('/auth/logout', ctrl.logout)

app.listen(SERVER_PORT, () => console.log(`Server listening on port: ${SERVER_PORT}`))   
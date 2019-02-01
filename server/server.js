require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const massive = require('massive')
const ctrl = require('./controllers/controller')
const auth = require('./controllers/auth_ctrl')
const cart = require('./controllers/cart_ctrl')


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

//staff
app.post('/createFood', ctrl.createFood)
app.post('/createDrink', ctrl.createDrink)
app.get('/getAllFood', ctrl.getAllFood)
app.get('/getAllDrinks', ctrl.getAllDrinks)
app.get('/getOrders', ctrl.getOrders)
app.put('/ordersToCompleted/:id', ctrl.ordersToCompleted)
app.post('/addPoints/:id', ctrl.addPoints)
app.get('/redeemPoints/:id', ctrl.redeemPoints)
app.get('/getMemberHistory/:id', ctrl.getMemberHistory)
app.get('/getOrderQuantities', ctrl.getOrderQuantities)

//cart
app.get('/getFromCart', cart.getFromCart)
app.post('/addToCart', cart.addToCart)
app.put('/editQuantity/:id', cart.editQuantity)
app.delete('/deleteFromCart/:id', cart.deleteFromCart)
app.get('/getTotal', cart.getTotal) 
app.post('/chargeCard', cart.chargeCard)

//auth
app.post('/auth/signup', auth.signup)
app.post('/auth/login', auth.login)
app.get('/auth/user-data', auth.userData)
app.get('/auth/logout', auth.logout)

app.listen(SERVER_PORT, () => console.log(`Server listening on port: ${SERVER_PORT}`))   
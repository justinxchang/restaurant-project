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
// app.use(session({
//     secret: SECRET,
//     resave: false,
//     saveUnitialized: false
// }))
// app.use( express.static( __dirname + '../../public' ) );


app.post('/createfood', ctrl.createFood)
// app.post('/createfood', ctrl.addToDB)
app.get('/getfood', ctrl.getAllFood)
app.post('/addToOrder', ctrl.addToOrder)
app.get('/getFromCart', ctrl.getFromCart)
app.delete('/deleteFromCart/:id', ctrl.deleteFromCart)
app.put('/editQuantity/:id', ctrl.editQuantity)
// app.get('/cartToOrders', ctrl.cartToOrders)
app.post('/payment', ctrl.chargeCard)
app.get('/getOrders', ctrl.getOrders)
app.get('/getTotal', ctrl.getTotal)

app.listen(SERVER_PORT, () => console.log(`Server listening on port: ${SERVER_PORT}`))  
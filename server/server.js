require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const massive = require('massive')
const ctrl = require('./controller')

const app = express();
const {SERVER_PORT, CONNECTION_STRING, SECRET} = process.env

// connect to DB
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

// // endpoints
app.post('/api/createfood', ctrl.addToDB)
app.get('/api/getfood', ctrl.getAllFood)
app.post('/api/addToOrder', ctrl.addToOrder)





app.listen(SERVER_PORT, () => console.log(`Server listening on port: ${SERVER_PORT}`)) 
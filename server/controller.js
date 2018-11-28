const bcrypt = require('bcryptjs')
let order_num = 0
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

module.exports = { 
    createFood: (req, res) => {
        let {foodName, foodDescription, foodPrice, foodImage, foodCategory} = req.body
        let db = req.app.get('db')
        db.add_food_to_menu([foodName, foodDescription, foodPrice, foodImage, foodCategory])
        .then((food) => {
            res.status(200).send(food)
        })
    },  
    createDrink: (req, res) => {
        let {drinkName, drinkABV, drinkOrigin, drinkDescription, drinkSubcategory, drinkCategory, drinkWebsite, drinkLogo, drinkPrice} = req.body
        let db = req.app.get('db')
        db.add_drink_item([drinkName, drinkABV, drinkOrigin, drinkDescription, drinkSubcategory, drinkCategory, drinkWebsite, drinkLogo, drinkPrice])
        .then((drink) => {
            res.status(200).send(drink)
        })
    }, 
    getAllFood: (req, res) => {
        let db = req.app.get('db')
        db.get_all_food_items()
        .then((food) => {
            res.status(200).send(food)
        })
    },
    getAllDrinks: (req, res) => {
        let db = req.app.get('db')
        db.get_all_drink_items()
        .then((drink) => {
            res.status(200).send(drink)
        }) 
    },
    addToCart: (req, res) => {
        let db = req.app.get('db')
        let {name, price, type} = req.body
        db.add_to_cart([order_num, name, price, type])
        .then((cart) => {
            res.status(200).send(cart)
        }) 
    },
    async getFromCart (req, res) {
        let db = req.app.get('db')
        let response = await db.get_all_from_cart()
        res.status(200).send(response)
    },
    editQuantity: (req, res) => {
        let db = req.app.get('db')
        let {id} = req.params 
        console.log(req.body)
        let {quantity} = req.body
        let num = parseFloat(quantity)
        db.edit_cart_quantity([id, num])
        .then((cart) => {
            res.status(200).send(cart) 
        })        
    },
    deleteFromCart: (req, res) => {
        let db = req.app.get('db')
        let {id} = req.params
        db.delete_from_cart(id)
        .then((cart) => res.status(200).send(cart))
    },
    getTotal: (req, res) => {
        let db = req.app.get('db')
        db.get_total()
        .then(total => res.status(200).send(total))
    },
    chargeCard: (req, res) => {
        const charge = stripe.charges.create({
            amount: req.body.amount, // amount in cents, again
            currency: 'usd',
            source: req.body.token.id,
            description: 'Test charge from Justin'
        }, async function(err, charge) {
            if (err) {
                console.log(err)
                return res.status(500).send(err)
            } else {
                let db = req.app.get('db')
                let response = await db.cart_to_orders()
                console.log('added to orders / cart cleared')
                order_num++
                console.log(charge)
                return res.status(200).send(charge);
                //do Nodemailer here
            }              
        })
        console.log('Card was charged')
    },
    async getOrders (req, res) {
        let db = req.app.get('db')
        let response = await db.get_all_orders()
        res.status(200).send(response)
        console.log(response)
    },
    async getOrderQuantities (req, res) {
        let db = req.app.get('db')
        let response = await db.get_order_quantities()
        res.status(200).send(response)
        console.log(response)
    },







    async signup (req, res) {      
        // 1. check database for existing email
        //   a. if exists, send error message
        // 2. else, generate salt and hash
        // 3. insert into database
        // 4. put user data on session
        // 5. send back 200 w/ data
        let {name, email, password} = req.body;
        let db = req.app.get('db');
        let foundUser = await db.find_user([email]);
        if(foundUser[0]) return res.status(200).send({message: `Email already in use.`})
        //whatever you send will become res.data, if you add a message property (or whatever), you can accesss it with res.data.message
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt)
        let createdUser = await db.create_customer([email, hash, name])
        req.session.user = {email: createdUser[0].cust_email}
        res.status(200).send({message: 'Logged In'})  
    },
    async login(req, res){ // ES6 thing, don't necessarily need the colon after signup:
        // 1. check to make sure a user has the email from req.body
        //   a. if not, then send back the proper message
        // 2. compare the password using compareSync method from bcrypt
        //   a. if incorrect, send proper message
        // 3. put logged in user on req.session
        // 4. send proper status
        console.log(req.body)
        let {email, password} = req.body
        let db = req.app.get('db')
        let foundUser = await db.find_user([email])
        if(foundUser[0]) {
            // compareSync returns either true or false
            let result = bcrypt.compareSync(password, foundUser[0].cust_hash)
            if(result){
                req.session.user = {email: foundUser[0].cust_email}
                res.status(200).send({message: 'Logged In'})
            } else {
                res.status(401).send({message: `Incorrect password.`})
            }
        } else {
            res.status(401).send({message: 'Email not found'})
        }
    },
    userData(req, res) {
        if (req.session.user) { // if line 19 or 37 happened
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(401)
        }
    }, 
    logout(req, res) {
        req.session.destroy()
        res.redirect('http://localhost:3000')  //since we have an <a> tag in Private.js, we can res.redirect
    }
}  
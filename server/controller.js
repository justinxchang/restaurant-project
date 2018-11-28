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
}  
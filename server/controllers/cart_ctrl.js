const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

module.exports = {
    async getFromCart (req, res) {
        let db = req.app.get('db')
        let response = await db.get_all_from_cart()
        res.status(200).send(response)
    },
    async addToCart (req, res) {
        let db = req.app.get('db')
        let {name, price, type, member_id} = req.body
        let result = await db.increment()
        let order_num = (parseInt(result[0].order_num) +1)
        let cart = await db.add_to_cart([order_num, name, price, type, member_id])
        res.status(200).send(cart)
    },
    async editQuantity (req, res) {
        let db = req.app.get('db')
        let {id} = req.params 
        let {quantity} = req.body
        let num = parseFloat(quantity)
        let cart = await db.edit_cart_quantity([id, num])
        res.status(200).send(cart)        
    },
    async deleteFromCart (req, res) {
        let db = req.app.get('db')
        let {id} = req.params
        let cart = await db.delete_from_cart(id)
        res.status(200).send(cart)
    },
    async getTotal (req, res) {
        let db = req.app.get('db')
        let total = await db.get_total()
        res.status(200).send(total)
        console.log(total)
    },
    async chargeCard (req, res) {
        const charge = stripe.charges.create({
            amount: req.body.amount,
            currency: 'usd',
            source: req.body.token.id,
            description: 'Charge from Angeleno Bar and Grille'
        }, async function(err, charge) {
            if (err) {
                console.log(err)
                return res.status(500).send(err)
            } else {
                let db = req.app.get('db')
                let response = await db.cart_to_orders()
                console.log('added to orders / cart cleared')
                return res.status(200).send(charge);
                //do Nodemailer here
            }               
        })
        console.log('Card was charged')
    },
}
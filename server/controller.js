let order_num = 0

module.exports = {
    addToDB: (req, res) => {
        let {foodName, foodDescription, foodPrice, foodCategory} = req.body
        let db = req.app.get('db')
        db.add_food_item([foodName, foodDescription, foodPrice, foodCategory])
        .then((food) => {
            res.status(200).send(food)
            console.log('food', food)
        })
    }, 
    getAllFood: (req, res) => {
        let db = req.app.get('db')
        db.get_all_food_items()
        .then((food) => {
            res.status(200).send(food)
        })
    },
    addToOrder: (req, res) => {
        let db = req.app.get('db')
        let {name, price} = req.body
        db.add_to_order([order_num, name, price])
        .then((food) => {
            res.status(200).send(food)
        }) 
    },
    async getFromCart (req, res) {
        let db = req.app.get('db')
        let response = await db.select_all_from_cart()
        console.log(response)
        res.status(200).send(response)
    },
    async cartToOrders (req, res) {
        let db = req.app.get('db')
        let response = await db.cart_to_orders()
        res.redirect('http://localhost:3000/#/cart')
        console.log('added to orders / cart cleared')
        order_num++
    },
    charge: (req, res) => {
        let db = req.app.get('db')

    }
} 
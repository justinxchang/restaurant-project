module.exports = { 
    async createFood (req, res) {
        let {foodName, foodDescription, foodPrice, foodImage, foodCategory} = req.body
        let db = req.app.get('db')
        let food = await db.add_food_to_menu([foodName, foodDescription, foodPrice, foodImage, foodCategory])
        res.status(200).send(food)
    },  
    async createDrink (req, res) {
        let {drinkName, drinkABV, drinkOrigin, drinkDescription, drinkSubcategory, drinkCategory, drinkWebsite, drinkLogo, drinkPrice} = req.body
        let db = req.app.get('db')
        let drink = await db.add_drink_item([drinkName, drinkABV, drinkOrigin, drinkDescription, drinkSubcategory, drinkCategory, drinkWebsite, drinkLogo, drinkPrice])
            res.status(200).send(drink)
    }, 
    async getAllFood (req, res) {
        let db = req.app.get('db')
        let food = await db.get_all_food_items()
            res.status(200).send(food)
    },
    async getAllDrinks (req, res) {
        let db = req.app.get('db')
        let drink = await db.get_all_drink_items()
        res.status(200).send(drink)
    },
    async ordersToCompleted (req, res) {
        let db = req.app.get('db')
        let {id} = req.params 
        let cart = await db.orders_to_completed(id)
        res.status(200).send(cart) 
    },
    async getOrders (req, res) {
        let db = req.app.get('db')
        let orders = await db.get_all_orders()
        res.status(200).send(orders)
        console.log(orders)
    },
    async getOrderQuantities (req, res){
        let db = req.app.get('db')
        let response = await db.get_order_quantities()
        res.status(200).send(response)
        console.log('order quantities', response)
    },
    async addPoints(req, res) {
        let db = req.app.get('db')
        let {id} = req.params 
        let points = req.body.points
        let response = await db.add_points([id, points])
        res.status(200).send(response)
        console.log('points response', response)        
    },
    async redeemPoints(req, res) {
        let db = req.app.get('db')
        let {id} = req.params 
        let response = await db.redeem_points([id])
            res.status(200).send(req.session.user = {
                email: response[0].member_email, 
                id: response[0].member_id, 
                points: response[0].points,
                admin: response[0].admin
        })        
    },
    async getMemberHistory(req, res) {
        let db = req.app.get('db')
        let {id} = req.params 
        let response = await db.get_member_history([id])
            res.status(200).send(response)
    }
}  

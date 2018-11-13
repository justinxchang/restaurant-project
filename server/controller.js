module.exports = {
    addToDB: (req, res) => {
        let {foodName, foodDescription, foodPrice, foodCategory} = req.body
        let db = req.app.get('db')
        db.add_food_item([foodName, foodDescription, foodPrice, foodCategory])
        .then((food) => {
            res.status(200).send(food)
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
        console.log('req body', req.body)
        db.add_to_order([name, price])
        .then((food) => {
            res.status(200).send(food)
        })
    }
}
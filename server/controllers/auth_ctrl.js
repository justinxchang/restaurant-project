module.exports = {
    async signup (req, res){      
        let {name, email, password} = req.body;
        let db = req.app.get('db');
        let foundUser = await db.find_user([email]);
        if(foundUser[0]) return res.status(200).send({message: `Email already in use.`})
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt)
        let createdUser = await db.create_member([email, hash, name])
        req.session.user = {email: createdUser[0].member_email}
        res.status(200).send({message: 'Logged In'})  
    },
    async login(req, res){ 
        console.log(req.body)
        let {email, password} = req.body
        let db = req.app.get('db')
        let foundUser = await db.find_user([email])
        if(foundUser[0]) {
            // compareSync returns either true or false
            let result = bcrypt.compareSync(password, foundUser[0].member_hash)
            if(result){
                req.session.user = {
                    email: foundUser[0].member_email, 
                    id: foundUser[0].member_id, 
                    points: foundUser[0].points,
                    admin: foundUser[0].admin
                }
                res.status(200).send({message: 'Logged In'})
            } else {
                res.status(401).send({message: `Incorrect password.`})
            }
        } else {
            res.status(401).send({message: 'Email not found'})
        }
    },
    userData(req, res) {
        let db = req.app.get('db')
        if (req.session.user) {
            db.find_user(req.session.user.email).then(resp => {
                req.session.user = {
                    email: resp[0].member_email, 
                    id: resp[0].member_id, 
                    points: resp[0].points,
                    admin: resp[0].admin
                }
                res.status(200).send(req.session.user)
            })
        } else {
            res.sendStatus(401)
        }
    }, 
    async logout(req, res) {
        req.session.destroy()
        res.redirect(process.env.LOGOUT_REDIRECT)  //since we have an <a> tag in Private.js, we can res.redirect
    }
}
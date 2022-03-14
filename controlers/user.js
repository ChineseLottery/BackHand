const User = require("../models/user").User;

const addUser = async (req, res) => {
    try {
        let u = new User(req.body)
        await u.save();
        return res.send(u)
    }
    catch (error) {
        return res.status(400).send(error)
    }
}

const findOrdersByUserId = async (req, res) => {
    let userId = req.params._id
    try {
        let orders = await User.findById(userId).arr_orders
        return res.send(orders)
    }
    catch (error) {
        return res.status(400).send(error)
    }
}

const addOrder = async (req, res) => {
    let userId = req.params._id
    try {
        let user = await User.findById(userId)
        if (user)
            user.arr_orders.push(req.params.order)
        else
            let newUser = new User()
    }
    catch(error) {
        return res.status(400).send(error)
    }

}
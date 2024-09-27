const userService = require('../services/userService')

exports.getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.json(users);
    } catch (e) {
        res.status(500).send('Error al obtener los usuarios')
    }
  };

exports.createUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        
        res.status(200).json(newUser);
    } catch (e) {
        if (e.code === 409) {
            return res.status(e.code).send(e.message)
        }
        return res.status(500).send(e);
    }
}
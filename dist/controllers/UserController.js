"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _UsersModelsjs = require('../models/UsersModels.js'); var _UsersModelsjs2 = _interopRequireDefault(_UsersModelsjs);

class UserController {

  async store(req, res) {

    let { name, email, password } = req.body

    try {
      const user = await _UsersModelsjs2.default.create({
        name,
        email,
        password
      })
      res.json({ id: user.id, name: user.name, email: user.email })
    } catch (err) {
      res.status(400).json({ msg: err.errors[0].message })
      throw new Error(err)
    }
  }

  async index(req, res) {
    try {
      let users = await _UsersModelsjs2.default.findAll({ attributes: ["id", "name", "email"] })
      res.json(users)
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" })
      throw new Error(err)
    }
  }

  async show(req, res) {
    try {
      let user = await _UsersModelsjs2.default.findByPk(req.params.id)

      res.json({ id: user.id, name: user.name, email: user.email })
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" })
      throw new Error(err)
    }
  }

  async update(req, res) {
    let { name, email, password } = req.body
    try {

      const user = (await _UsersModelsjs2.default.findByPk(req.userId))

      if (!user) {
        return res.status(404).json({ errors: ["User not found"] })
      }

      const newUser = await user.update({ name, email, password })
      res.status(200).json({ id: newUser.id, name: newUser.name, email: newUser.email })

    } catch (err) {
      res.status(400).json({ msg: err.errors })
      throw new Error(err)
    }
  }

  async delete(req, res) {
    try {

      let user = await _UsersModelsjs2.default.findByPk(req.userId)

      if (!user) {
        return res.status(404).json({ errors: ["User not found"] })
      }

      await user.destroy()

      res.status(200).json({ msg: "User deleted" })

    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" })
      throw new Error(err)
    }
  }

}

exports. default = new UserController()

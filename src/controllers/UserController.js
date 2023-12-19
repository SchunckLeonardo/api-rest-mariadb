import User from '../models/UsersModels.js'

class UserController {

  async store(req, res) {

    let { name, email, password } = req.body

    try {
      const user = await User.create({
        name,
        email,
        password
      })
      res.json(user)
    } catch (err) {
      res.status(400).json({ msg: err.errors[0].message })
      throw new Error(err)
    }
  }

  async index(req, res) {
    try {
      let users = await User.findAll()
      res.json(users)
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" })
      throw new Error(err)
    }
  }

  async show(req, res) {
    let id = req.params.id
    try {
      let user = await User.findByPk(id)
      res.json(user)
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" })
      throw new Error(err)
    }
  }

  async update(req, res) {
    let { name, email, password } = req.body
    let id = req.params.id
    try {

      if (!id) {
        return res.status(400).json({ msg: "ID Missing" })
      }

      const user = (await User.findByPk(id))

      if (!user) {
        return res.status(404).json({ msg: "User not found" })
      }

      const newUser = await user.update({ name, email, password })
      res.status(200).json(newUser)

    } catch (err) {
      res.status(400).json({ msg: err.errors[0].message })
      throw new Error(err)
    }
  }

  async delete(req, res) {
    let id = req.params.id
    try {
      if (!id) {
        return res.status(400).json({ msg: "ID Missing" })
      }

      let user = await User.findByPk(id)

      if (!user) {
        return res.status(404).json({ msg: "User not found" })
      }

      await user.destroy()

      res.status(200).json({msg: "User deleted"})

    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" })
      throw new Error(err)
    }
  }

}

export default new UserController()

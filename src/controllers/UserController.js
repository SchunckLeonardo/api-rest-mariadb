import User from '../models/UsersModels.js'

class UserController {

  async store(req, res) {

    let {name, email, password} = req.body

    try {
      const user = await User.create({
        name,
        email,
        password
      })
      res.json(user)
    } catch(err) {
      res.status(400).json({msg: err.errors[0].message})
      throw new Error(err)
    }
  }

}

export default new UserController()

import User from "../models/UsersModels.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
class TokenController {
  async store(req, res) {
    let { email, password } = req.body

    try {

      if (!email || !password) {
        return res.status(401).json({ errors: ["Invalid Credentials"] })
      }

      const user = await User.findOne({ where: { email } })

      if (!user) {
        return res.status(404).json({ errors: ["User not found"] })
      }

      const validatePassword = await bcrypt.compare(password, user.password_hash)

      if (!validatePassword) {
        return res.status(401).json({ errors: ["Invalid Password"] })
      }

      const { id } = user
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_TIMEOUT
      })

      res.status(200).json({ token })

    } catch (err) {
      res.status(400).json({ msg: err.errors })
      throw new Error(err)
    }
  }
}

export default new TokenController()

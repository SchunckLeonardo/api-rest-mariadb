import jwt from "jsonwebtoken"
import User from "../models/UsersModels.js"

class Middlewares {

  async LoginRequired(req, res, next) {
    const { authorization } = req.headers

    if (!authorization) {
      return res.status(401).json({ errors: ["Login Required"] })
    }

    const [, token] = authorization.split(" ")

    try {
      const datas = jwt.verify(token, process.env.TOKEN_SECRET)

      const { id, email } = datas

      const user = await User.findOne({ where: { email, id } })

      if(!user) {
        return res.status(401).json({errors: ["Invalid User"]})
      }

      req.userId = id
      req.userEmail = email
      return next()

    } catch (err) {
      res.status(401).json({ errors: ["Token Expired or Invalid"] })
      throw new Error(err)
    }

  }

}

export default new Middlewares()

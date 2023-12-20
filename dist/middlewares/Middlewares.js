"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _UsersModelsjs = require('../models/UsersModels.js'); var _UsersModelsjs2 = _interopRequireDefault(_UsersModelsjs);

class Middlewares {

  async LoginRequired(req, res, next) {
    const { authorization } = req.headers

    if (!authorization) {
      return res.status(401).json({ errors: ["Login Required"] })
    }

    const [, token] = authorization.split(" ")

    try {
      const datas = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET)

      const { id, email } = datas

      const user = await _UsersModelsjs2.default.findOne({ where: { email, id } })

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

exports. default = new Middlewares()

"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _UsersModelsjs = require('../models/UsersModels.js'); var _UsersModelsjs2 = _interopRequireDefault(_UsersModelsjs);
var _bcrypt = require('bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
class TokenController {
  async store(req, res) {
    let { email, password } = req.body

    try {

      if (!email || !password) {
        return res.status(401).json({ errors: ["Invalid Credentials"] })
      }

      const user = await _UsersModelsjs2.default.findOne({ where: { email } })

      if (!user) {
        return res.status(404).json({ errors: ["User not found"] })
      }

      const validatePassword = await _bcrypt2.default.compare(password, user.password_hash)

      if (!validatePassword) {
        return res.status(401).json({ errors: ["Invalid Password"] })
      }

      const { id } = user
      const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_TIMEOUT
      })

      res.status(200).json({ token })

    } catch (err) {
      res.status(400).json({ msg: err.errors })
      throw new Error(err)
    }
  }
}

exports. default = new TokenController()

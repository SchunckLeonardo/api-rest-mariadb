"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcrypt = require('bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);

 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 255],
            msg: "Name's fields must be between 3 to 255 characters"
          }
        }
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: "",
        unique: {
          msg: "Email has been registered"
        },
        validate: {
          isEmail: {
            msg: "Invalid Email"
          }
        }
      },
      password_hash: {
        type: _sequelize2.default.STRING,
        defaultValue: "",
      },
      password: {
        type: _sequelize2.default.VIRTUAL,
        defaultValue: "",
        validate: {
          len: {
            args: [6, 50],
            msg: "Password's fields must be between 6 to 50 characters"
          }
        }
      }
    }, {sequelize})

    this.addHook('beforeSave', async user => {
      if(user.password) {
        user.password_hash = await _bcrypt2.default.hash(user.password, 10)
      }
    })

    return this
  }
} exports.default = User;

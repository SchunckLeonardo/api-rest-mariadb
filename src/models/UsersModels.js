import Sequelize, { Model } from "sequelize";
import bcrypt from 'bcrypt'

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 255],
            msg: "Name's fields must be between 3 to 255 characters"
          }
        }
      },
      email: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
        defaultValue: "",
      },
      password: {
        type: Sequelize.VIRTUAL,
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
        user.password_hash = await bcrypt.hash(user.password, 10)
      }
    })

    return this
  }
}

import Sequelize, { Model } from "sequelize";

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 255],
            msg: "Name must be between 3 to 255 characters"
          }
        }
      },
      subname: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 255],
            msg: "subname must be between 3 to 255 characters"
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
            msg: "Invalid E-mail"
          }
        }
      },
      age: {
        type: Sequelize.INTEGER,
        defaultValue: "",
        validate: {
          isInt: {
            msg: "Age must be a Integer Number"
          }
        }
      },
      weight: {
        type: Sequelize.FLOAT,
        defaultValue: "",
        validate: {
          isFloat: {
            msg: "Weight must be a Float Number"
          }
        }
      },
      height: {
        type: Sequelize.FLOAT,
        defaultValue: "",
        validate: {
          isFloat: {
            msg: "Height must be a Float Number"
          }
        }
      },
    }, { sequelize })

    return this
  }

  static associate(models) {
    this.hasMany(models.Photo, { foreignKey: "student_id" })
  }
}

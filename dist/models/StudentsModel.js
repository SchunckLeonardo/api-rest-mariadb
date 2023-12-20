"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Student extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 255],
            msg: "Name must be between 3 to 255 characters"
          }
        }
      },
      subname: {
        type: _sequelize2.default.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 255],
            msg: "subname must be between 3 to 255 characters"
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
            msg: "Invalid E-mail"
          }
        }
      },
      age: {
        type: _sequelize2.default.INTEGER,
        defaultValue: "",
        validate: {
          isInt: {
            msg: "Age must be a Integer Number"
          }
        }
      },
      weight: {
        type: _sequelize2.default.FLOAT,
        defaultValue: "",
        validate: {
          isFloat: {
            msg: "Weight must be a Float Number"
          }
        }
      },
      height: {
        type: _sequelize2.default.FLOAT,
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
} exports.default = Student;

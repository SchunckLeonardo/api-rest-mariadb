"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _configjs = require('../config/config.js'); var _configjs2 = _interopRequireDefault(_configjs);

 class Photo extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: _sequelize2.default.STRING,
        defaultValue: "",
        validate: {
          notEmpty: {
            msg: "Field can't be empty"
          }
        }
      },
      filename: {
        type: _sequelize2.default.STRING,
        defaultValue: "",
        validate: {
          notEmpty: {
            msg: "Field can't be empty"
          }
        }
      },
      url: {
        type: _sequelize2.default.VIRTUAL,
        get() {
          return `${_configjs2.default.url}/images/${this.getDataValue('filename')}`
        }
      }
    }, { sequelize, tableName: "photos" })

    return this
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: "student_id" })
  }

} exports.default = Photo;

import Sequelize, { Model } from "sequelize";
import appConfig from "../config/config.js"

export default class Photo extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          notEmpty: {
            msg: "Field can't be empty"
          }
        }
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          notEmpty: {
            msg: "Field can't be empty"
          }
        }
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`
        }
      }
    }, { sequelize, tableName: "photos" })

    return this
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: "student_id" })
  }

}

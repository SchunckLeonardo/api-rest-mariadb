import Sequelize from "sequelize"
import databaseConfig from "../config/database.js"
import Student from "../models/StudentsModel.js"

const models = [Student]

const connection = new Sequelize(databaseConfig)

models.forEach(model => model.init(connection))

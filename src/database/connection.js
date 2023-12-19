import Sequelize from "sequelize"
import databaseConfig from "../config/database.js"
import Student from "../models/StudentsModel.js"
import User from "../models/UsersModels.js"

const models = [Student, User]

const connection = new Sequelize(databaseConfig)

models.forEach(model => model.init(connection))

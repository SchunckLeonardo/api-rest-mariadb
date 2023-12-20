import Sequelize from "sequelize"
import databaseConfig from "../config/database.js"
import Student from "../models/StudentsModel.js"
import User from "../models/UsersModels.js"
import Photo from "../models/PhotosModel.js"

const models = [Student, User, Photo]

const connection = new Sequelize(databaseConfig)

models.forEach(model => model.init(connection))
models.forEach(model => model.associate && model.associate(connection.models))

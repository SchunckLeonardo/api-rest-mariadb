"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _databasejs = require('../config/database.js'); var _databasejs2 = _interopRequireDefault(_databasejs);
var _StudentsModeljs = require('../models/StudentsModel.js'); var _StudentsModeljs2 = _interopRequireDefault(_StudentsModeljs);
var _UsersModelsjs = require('../models/UsersModels.js'); var _UsersModelsjs2 = _interopRequireDefault(_UsersModelsjs);
var _PhotosModeljs = require('../models/PhotosModel.js'); var _PhotosModeljs2 = _interopRequireDefault(_PhotosModeljs);

const models = [_StudentsModeljs2.default, _UsersModelsjs2.default, _PhotosModeljs2.default]

const connection = new (0, _sequelize2.default)(_databasejs2.default)

models.forEach(model => model.init(connection))
models.forEach(model => model.associate && model.associate(connection.models))

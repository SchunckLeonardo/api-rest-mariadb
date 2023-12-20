"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _dotenv = require('dotenv');
var _path = require('path');
require('./database/connection.js');
var _UserRoutesjs = require('./routes/UserRoutes.js'); var _UserRoutesjs2 = _interopRequireDefault(_UserRoutesjs);
var _TokenRoutesjs = require('./routes/TokenRoutes.js'); var _TokenRoutesjs2 = _interopRequireDefault(_TokenRoutesjs);
var _StudentRoutesjs = require('./routes/StudentRoutes.js'); var _StudentRoutesjs2 = _interopRequireDefault(_StudentRoutesjs);
var _PhotoRoutesjs = require('./routes/PhotoRoutes.js'); var _PhotoRoutesjs2 = _interopRequireDefault(_PhotoRoutesjs);
const app = _express2.default.call(void 0, )
_dotenv.config.call(void 0, )

app.use(_express2.default.urlencoded({ extended: false }))
app.use(_express2.default.json())
app.use("/users", _UserRoutesjs2.default)
app.use("/token", _TokenRoutesjs2.default)
app.use("/student", _StudentRoutesjs2.default)
app.use("/photos", _PhotoRoutesjs2.default)
app.use(_express2.default.static(_path.resolve.call(void 0, "uploads")))

exports. default = app

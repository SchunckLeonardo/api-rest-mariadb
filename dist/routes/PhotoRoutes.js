"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Middlewaresjs = require('../middlewares/Middlewares.js'); var _Middlewaresjs2 = _interopRequireDefault(_Middlewaresjs);
var _PhotoControllerjs = require('../controllers/PhotoController.js'); var _PhotoControllerjs2 = _interopRequireDefault(_PhotoControllerjs);

const router = _express.Router.call(void 0, )

router.post("/", _Middlewaresjs2.default.LoginRequired, _PhotoControllerjs2.default.store)

exports. default = router

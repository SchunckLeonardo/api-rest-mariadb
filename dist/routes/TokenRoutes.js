"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TokenControllerjs = require('../controllers/TokenController.js'); var _TokenControllerjs2 = _interopRequireDefault(_TokenControllerjs);

const router = _express.Router.call(void 0, )

router.post("/", _TokenControllerjs2.default.store)

exports. default = router

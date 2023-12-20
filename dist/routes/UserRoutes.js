"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserControllerjs = require('../controllers/UserController.js'); var _UserControllerjs2 = _interopRequireDefault(_UserControllerjs);
var _Middlewaresjs = require('../middlewares/Middlewares.js'); var _Middlewaresjs2 = _interopRequireDefault(_Middlewaresjs);
const router = _express.Router.call(void 0, )

// Unecessary
router.get("/", _UserControllerjs2.default.index)
router.get("/:id", _UserControllerjs2.default.show)

// User Routes
router.post("/", _UserControllerjs2.default.store)
router.put("/", _Middlewaresjs2.default.LoginRequired, _UserControllerjs2.default.update)
router.delete("/", _Middlewaresjs2.default.LoginRequired, _UserControllerjs2.default.delete)

exports. default = router

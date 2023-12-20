"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _StudentControllerjs = require('../controllers/StudentController.js'); var _StudentControllerjs2 = _interopRequireDefault(_StudentControllerjs);
var _Middlewaresjs = require('../middlewares/Middlewares.js'); var _Middlewaresjs2 = _interopRequireDefault(_Middlewaresjs);

const router = _express.Router.call(void 0, )

router.get("/", _StudentControllerjs2.default.index)
router.get("/:id", _StudentControllerjs2.default.show)
router.post("/", _Middlewaresjs2.default.LoginRequired, _StudentControllerjs2.default.store)
router.put("/:id", _Middlewaresjs2.default.LoginRequired, _StudentControllerjs2.default.update)
router.delete("/:id", _Middlewaresjs2.default.LoginRequired, _StudentControllerjs2.default.delete)

exports. default = router

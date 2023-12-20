"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfigjs = require('../config/multerConfig.js'); var _multerConfigjs2 = _interopRequireDefault(_multerConfigjs);
var _PhotosModeljs = require('../models/PhotosModel.js'); var _PhotosModeljs2 = _interopRequireDefault(_PhotosModeljs);
var _StudentsModeljs = require('../models/StudentsModel.js'); var _StudentsModeljs2 = _interopRequireDefault(_StudentsModeljs);

const upload = _multer2.default.call(void 0, _multerConfigjs2.default).single("photo")

class PhotoController {
  store(req, res) {
    return upload(req, res, async (err) => {

      const { student_id } = req.body

      if (!_StudentsModeljs2.default.findByPk(student_id)) {
        return res.status(404).json({ errors: [err.code] })
      }

      if (err) {
        return res.status(400).json({ errors: [err.code] })
      }

      try {

        const { originalname, filename } = req.file

        const photo = await _PhotosModeljs2.default.create({
          originalname,
          filename,
          student_id
        })

        res.status(200).json(photo)
      } catch (err) {
        res.status(404).json({ errors: ["Not found Student"] })
        throw new Error(err)
      }
    })
  }
}

exports. default = new PhotoController()

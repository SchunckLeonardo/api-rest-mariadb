"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _StudentsModeljs = require('../models/StudentsModel.js'); var _StudentsModeljs2 = _interopRequireDefault(_StudentsModeljs);
var _PhotosModeljs = require('../models/PhotosModel.js'); var _PhotosModeljs2 = _interopRequireDefault(_PhotosModeljs);

class StudentController {
  async index(req, res) {
    try {
      let students = await _StudentsModeljs2.default.findAll({
        attributes: ["id", "name", "subname", "email", "age", "weight", "height"],
        order: [["id", "DESC"], [_PhotosModeljs2.default, "id", "DESC"]],
        include: [
          {
            model: _PhotosModeljs2.default,
            attributes: ["url","filename"]
          }
        ]
      })
      res.json(students)
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" })
      throw new Error(err)
    }
  }

  async show(req, res) {
    try {
      let student = await _StudentsModeljs2.default.findByPk(req.params.id, {
        attributes: ["id", "name", "subname", "email", "age", "weight", "height"],
        order: [["id", "DESC"], [_PhotosModeljs2.default, "id", "DESC"]],
        include: [
          {
            model: _PhotosModeljs2.default,
            attributes: ["url", "filename"]
          }
        ]
      })

      if(!student) {
        return res.status(404).json({errors: ["Not found Student"]})
      }

      res.json(student)
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" })
      throw new Error(err)
    }
  }

  async store(req, res) {
    let { name, subname, email, age, weight, height } = req.body

    try {
      const student = await _StudentsModeljs2.default.create({
        name,
        subname,
        email,
        age,
        weight,
        height
      })
      res.status(201).json(
        {
          id: student.id,
          name: student.name,
          subname: student.subname,
          email: student.email,
          age: student.age,
          weight: student.weight,
          height: student.height
        }
      )
    } catch (err) {
      res.status(400).json({ msg: err.errors[0].message })
      throw new Error(err)
    }
  }

  async update(req, res) {
    let { name, subname, email, age, weight, height } = req.body
    let id = req.params.id
    try {

      const student = (await _StudentsModeljs2.default.findByPk(id))

      if (!student) {
        return res.status(404).json({ errors: ["Student not found"] })
      }

      const newStudent = await student.update({ name, subname, email, age, weight, height })
      res.status(200).json({
        id: newStudent.id,
        name: newStudent.name,
        subname: newStudent.subname,
        email: newStudent.email,
        age: newStudent.age,
        weight: newStudent.weight,
        height: newStudent.height
      })

    } catch (err) {
      res.status(400).json({ msg: err.errors })
      throw new Error(err)
    }
  }

  async delete(req, res) {

    let id = req.params.id

    try {

      let student = await _StudentsModeljs2.default.findByPk(id)

      if (!student) {
        return res.status(404).json({ errors: ["Student not found"] })
      }

      await student.destroy()

      res.status(200).json({ msg: "Student deleted" })

    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" })
      throw new Error(err)
    }
  }
}

exports. default = new StudentController()

import Student from "../models/StudentsModel.js"
import Photo from "../models/PhotosModel.js"

class StudentController {
  async index(req, res) {
    try {
      let students = await Student.findAll({
        attributes: ["id", "name", "subname", "email", "age", "weight", "height"],
        order: [["id", "DESC"], [Photo, "id", "DESC"]],
        include: [
          {
            model: Photo,
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
      let student = await Student.findByPk(req.params.id, {
        attributes: ["id", "name", "subname", "email", "age", "weight", "height"],
        order: [["id", "DESC"], [Photo, "id", "DESC"]],
        include: [
          {
            model: Photo,
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
      const student = await Student.create({
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

      const student = (await Student.findByPk(id))

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

      let student = await Student.findByPk(id)

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

export default new StudentController()

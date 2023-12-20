import multer from "multer"
import multerConfig from "../config/multerConfig.js"
import Photo from "../models/PhotosModel.js"
import Student from "../models/StudentsModel.js"

const upload = multer(multerConfig).single("photo")

class PhotoController {
  store(req, res) {
    return upload(req, res, async (err) => {

      const { student_id } = req.body

      if (!Student.findByPk(student_id)) {
        return res.status(404).json({ errors: [err.code] })
      }

      if (err) {
        return res.status(400).json({ errors: [err.code] })
      }

      try {

        const { originalname, filename } = req.file

        const photo = await Photo.create({
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

export default new PhotoController()

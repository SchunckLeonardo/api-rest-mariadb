import multer from "multer"
import multerConfig from "../config/multerConfig.js"

const upload = multer(multerConfig).single("photo")

class PhotoController {
  async store(req, res) {
    return upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({ errors: [err.code] })
      }
      res.status(200).json(req.file)
    })
  }
}

export default new PhotoController()

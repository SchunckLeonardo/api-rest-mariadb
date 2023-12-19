import Student from '../models/StudentsModel.js'

class HomeController {

  async index(req, res) {
    res.json({"msg": "ola"})
  }

}

export default new HomeController()

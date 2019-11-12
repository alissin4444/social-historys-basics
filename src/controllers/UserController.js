const User = require('../models/User');

module.exports = {
  async store(req, res) {
    try {
      const {
        nome,
        sobre,
        email,
        senha
      } = req.body;
      const emailOpen = await User.findAll({
        where: {
          email
        }
      });
      if (emailOpen == false) {
        const user = await User.create({
          nome,
          sobre,
          email,
          senha
        });
        return res.status(200).json(user);
      };
      return res.status(400).json({ message: "email não disponível" });
    } catch (err) {
      return res.status(400).json(err);
    }
  },
}
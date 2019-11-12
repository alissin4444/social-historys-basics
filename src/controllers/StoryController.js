const Story = require('../models/Story');
const User = require('../models/User');

module.exports = {
  async store(req, res) {
    try {
      const {
        id_user,
        titulo,
        historia
      } = req.body;
      const story = await Story.create({
        id_user,
        titulo,
        historia
      });
      return res.status(200).json(story);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
}
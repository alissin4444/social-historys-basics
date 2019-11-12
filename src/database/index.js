const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Story = require('../models/Story');

const connection = new Sequelize(dbConfig);

User.init(connection);
Story.init(connection);

Story.associate(connection.models);

module.exports = connection;
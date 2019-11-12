const { Model, DataTypes } = require('sequelize');

class Story extends Model {
    static init(sequelize) {
        super.init({
            titulo: DataTypes.STRING,
            historia: DataTypes.STRING
        }, {
            sequelize,
            tableName: "storys"
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'id_user', as: 'writer' })
    }
};

module.exports = Story;
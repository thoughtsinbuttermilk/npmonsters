const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pet_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "no name provided"
    },
    pet_type:{
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "no type provided"
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "no description provided"
    },
    pet_breed:{
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "no breed provided"
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    file_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;

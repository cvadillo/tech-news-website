const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
	{
		id: {
			// use the special Sequelize DataTypes object provide what type of data it is
			type: DataTypes.INTEGER,
			// this is the equivalent of SQL's `NOT NULL` option
			allowNull: false,
			// instruct that this is the Primary Key
			primaryKey: true,
			// turn on auto increment
			autoIncrement: true
	    },
	    comment_text: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
	    		len: [1]
	    	}
		},
	    user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'user',
				key: 'id'
			}
		},
		postr_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'post',
				key: 'id'
			}
		}
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: 'comment'
	}
);

module.exports = Comment;
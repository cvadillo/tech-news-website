const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {}

// define table columns and configuration
User.init(
	{
		// define an id column
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
	    // define a username column
	    username: {
	    	type: DataTypes.STRING,
	    	allowNull: false
	    },
	    // define an email column
	    email: {
	    	type: DataTypes.STRING,
	    	allowNull: false,
	    	// no duplicate emails
	    	unique: true,
	    	// if allowNull is set to false, we can run our data through validators before creating the table data
	    	validate: {
	    		isEmail: true
	    	}
	    },
	    // Define a password column
	    password: {
	    	type: DataTypes.STRING,
	    	allowNull: false,
	    	validate: {
	    		// this means the password must be at least four characters long
	    		len: [4]
	    	}
	    }
	},
	{
		// Table confguration options go here
		// pass in our imported sequelize connection (the direct connection to our database)
		// don't automatically create createdAt/updatedAt timestamp fields
		// don't pluralize name of database table
		// use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
		// make it so our model name stays lowercase in the database
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'user'
	}
);

module.exports = User;
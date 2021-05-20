// import the Sequelize constructor from the library
const Sequelize = new Sequelize (process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
	host: 'localhost',
	dialect: 'mysql',
	port: 3306
});

require('dotenv').config();

// create connection to our database, pass in MySQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
	host: 'localhost',
	dialect: 'mysql',
	port: 3306
});

module.exports = sequelize;
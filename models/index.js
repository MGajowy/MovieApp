
const dbConfig = require('../config/db.config')

const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
} )

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.movie = require('./movie.model')(sequelize, Sequelize);
db.director = require('./director.model')(sequelize, Sequelize);

db.director.hasMany(db.movie, { as: "movies" });
db.movie.belongsTo(db.director, {
  foreignKey: "directorId",
  as: "directors",
});

module.exports = db;



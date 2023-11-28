module.exports = {
    // HOST: 'localhost',
    HOST: 'postgresDB',
    USER: 'postgres',
    PASSWORD: 'postgres',
    // DB: 'nodedb',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
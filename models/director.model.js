module.exports = (sequelize, Sequelize) => {
    const Director = sequelize.define('director', {
        name: {
            type: Sequelize.STRING
        },
        surname: {
            type: Sequelize.STRING
        }

    })
    
    return Director
}
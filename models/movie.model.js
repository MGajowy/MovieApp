

module.exports = (sequelize, Sequelize) => {
    const Movie = sequelize.define('movie', {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
    })
    
    return Movie
}


const db = require('../models')
const Movie = db.movie
const Op = db.Sequelize.Op

exports.create = (req, res) => {
    // create
    if (!req.body.title) {
        res.status(400).send({
            message: 'To pole nie może być puste'
        })
        return
    }

    const movie = {
        title: req.body.title,
        description: req.body.description
    }

    Movie.create(movie)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Błąd. Coś poszło nie tak :( '
            })
        })
}

// findAll
exports.findAll = (req, res) => {
    const title = req.query.title
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null

    Movie.findAll({ where: condition })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Błąd. Coś poszło nie tak :( '
            })
        })
}

// findOne
exports.findOne = (req, res) => {
    const id = req.params.id

    Movie.findByPk(id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Błąd. Nie znaleziono moviey o id =' + id
            })
        })
}

// update
exports.update = (req, res) => {
    const id = req.params.id

    Movie.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Film zostal zmodyfikowany'
                })
            } else {
                res.send({
                    message: 'Nie udało się zmodyfikować filmu o id = ${id}'
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Błąd. Cos poszlo nie tak podczas modyfikacji o id = ' + id
            })
        })
}

// delete
exports.delete = (req, res) => {
    const id = req.params.id

    Movie.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Film został usunięty'
                })
            } else {
                res.send({
                    message: 'Nie udało sie poprawnie usunąc filmu o id = ' + id
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Błąd. Wystąpił błąd podczas usuwania filmu o id = ' + id
            })
        })
}

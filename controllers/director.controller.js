const db = require('../models')
const Director = db.director
const Op = db.Sequelize.Op

exports.create = (req, res) => {
    // create
    if (!req.body.surname) {
        res.status(400).send({
            message: 'To pole nie może być puste'
        })
        return
    }

    const director = {
        name: req.body.name,
        surname: req.body.surname
    }

    Director.create(director)
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
    const surname = req.query.surname
    var condition = surname ? { surname: { [Op.like]: `%${surname}%` } } : null

    Director.findAll({ where: condition })
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

    Director.findByPk(id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Błąd. Nie znaleziono rezysera o id =' + id
            })
        })
}

// update
exports.update = (req, res) => {
    const id = req.params.id

    Director.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Reżyser zostal zmodyfikowany'
                })
            } else {
                res.send({
                    message: 'Nie udało się zmodyfikować reżysera o id = ${id}'
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

    Director.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Reżyser został usunięty'
                })
            } else {
                res.send({
                    message: 'Nie udało sie poprawnie usunąc reżysera o id = ' + id
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Błąd. Wystąpił błąd podczas usuwania reżysera o id = ' + id
            })
        })
}

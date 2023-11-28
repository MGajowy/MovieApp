module.exports = app => {
    const directors = require('../controllers/director.controller')

    var router = require('express').Router()

    router.post('/', directors.create);

    router.get('/', directors.findAll);

    router.get('/:id', directors.findOne);

    router.put('/:id', directors.update);

    router.delete('/:id', directors.delete);

    app.use('/api/directors', router);
} 
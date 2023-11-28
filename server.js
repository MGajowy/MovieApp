const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

var corsOptions = {
    origin: 'http://localhost:8080'
    // origin: 'http://localhost:4200'
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const db = require('./models')

const run = async () => {
};
// db.sequelize.sync()
db.sequelize.sync({force: true}).then(() => {
    console.log("Drop and re-sync db.")
})

app.get('/', (req, res) => {
    res.json({message: 'Hej Michał'})
})

require('./routes/movie.routes')(app)
require('./routes/director.routes')(app)

const PORT = process.env.PORT || 8020
app.listen(PORT, () => {
    console.log('Słucham na porcie 8020')
})
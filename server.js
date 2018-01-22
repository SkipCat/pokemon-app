require('colors')
const helmet = require('helmet')
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose');
const assert = require('assert')
const PokemonController = require('./controllers/Pokemon')

const app = express()

app.use(helmet())
app.use(morgan(process.env.NODE_DEV === 'production' ?  'combined' : 'dev'))
app.use(express.urlencoded({ extended: false }))

app.get('/api/pokemons', PokemonController.findAll)
app.get('/api/pokemon/:id', PokemonController.findOne)
app.post('/api/pokemon', PokemonController.add)

// Configuration
app.set('ip', 'localhost')
app.set('port', 9000)

const startApp = app => {
    return new Promise( (resolve, reject) => {
        const server = app.listen(app.get('port'), app.get('ip'), resolve)
        server.on('error', reject)
    })
}

mongoose
    .connect('mongodb://localhost:27017/pokemons', {useMongoClient:true})
    .then(() => console.log(`MongoDB : Connexion établie`.bgGreen.black))
    .then(() => startApp(app))
    .then(() => console.log(
        `L'application est en route sur http://${app.get('ip')}:${app.get('port')}`.bgGreen.black
	))
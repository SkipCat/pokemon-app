require('colors')
const helmet = require('helmet')
const express = require('express')
const morgan = require('morgan')
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert')

const app = express()
let db = null

process.env.NODE_DEV
'development'
'production'

// connect to the server
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
	db = client.db('pokemons')

	app.use(helmet())
	app.use(morgan(process.env.NODE_DEV === 'production' ?  'combined' : 'dev'))

	app.get('/api/pokemons', (request, res) => {
		db.collection('pokemons').find({}).toArray((err, pokemons) => {
			res.json(pokemons)
		})
	})

	app.listen(9000, () => console.log('Listening on port 9000'.rainbow))
	
})



const findDocuments = function(db, callback) {
	// Get the documents collection
	const collection = db.collection('pokemons');
	
	// Find some documents
	collection.find({}).toArray(function(err, docs) {
		assert.equal(err, null);
		console.log("Found the following records");
		console.log(docs)
		callback(docs);
	});
}
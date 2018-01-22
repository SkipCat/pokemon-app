const PokemonModel = require('../models/Pokemon') 

/* 
GET /api/pokemons 
Renvoie la liste de tous les pokemons en base 
*/ 
exports.findAll = (request, response) => { 
	PokemonModel.find().then(pokemonsList => { 
		response.json(pokemonsList) 
	}) 
	.catch(err => response.status(500).send(err.message)) 
}

exports.findById = (request, response) => {
	PokemonModel.findOne({'_id': 1}).then(pokemon => {
		response.json(pokemon)
	})
	.catch(err => response.status(500).send(err.message)) 
}
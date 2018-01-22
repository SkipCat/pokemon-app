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

exports.findOne = (request, response) => {
	PokemonModel.findById(request.params.id).then(pokemon => {
		if (pokemon == null) {
			return Promise.reject(new Error('This pokemon does not exist'))
		}
		response.json(pokemon)
	})
	.catch(err => response.status(500).send(err.message)) 
}

exports.add = (request, response) => {
	PokemonModel.create(request.body).then(pokemon => {
		response.json({ message: 'Pokemon inserted in database', payload: pokemon })
	})
	.catch(err => response.status(500).send(err.message)) 
}

exports.remove = (request, response) => {
	PokemonModel.findByIdAndRemove(request.params.id).then(pokemon => {
		return Promise.reject(new Error('This pokemon does not exist'))
	})
	.catch(err => response.status(500).send(err.message)) 
}
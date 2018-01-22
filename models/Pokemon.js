const mongoose = require('mongoose') 

/* 
Création du modèle "Pokemon" 
Un modèle Mongoose contient des méthodes et propriétés permettant de manipuler des documents 
*/ 
const Pokemon = mongoose.model('Pokemon', { 
	_id     : { type : Number, required : true }, 
	name    : { type : String, required : true }, 
	pv      : { type : Number, required : true }, 
	level   : { type : Number, required : true }, 
	type    : { type : String, required : true }, 
	attack  : { type : Number, required : true }, 
	defense : { type : Number, required : true } 
}) 

// Ce module "Pokemon.js" exporte l'objet Mongoose correspondant au modèle d'un document "Pokemon" 
module.exports = Pokemonu
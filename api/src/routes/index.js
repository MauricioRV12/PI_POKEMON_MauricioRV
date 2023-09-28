const { Router } = require('express');
const { getPokemons } = require('../controllers/getPokemons');
const { getPokemonsById} = require('../controllers/getPokemonsById');
const { getPokemonsByName } = require('../controllers/getPokemonsByName');
const { postPokemons } = require('../controllers/postPokemons');
const { getTypes } = require('../controllers/getTypes');

const router = Router();

router.get('/pokemons', getPokemons);

router.get('/pokemons/name', getPokemonsByName); // Debe ir antes de getPokemonsById

router.get('/pokemons/:id', getPokemonsById);

router.get('/types', getTypes);

router.post('/pokemons', postPokemons);


module.exports = router;

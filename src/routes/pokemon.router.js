const express = require('express');
const router = express.Router();
const pokeController = require('../controllers/pokemon.controller');

router.get('/', pokeController.getAllPokemons);
router.get('/paginated', pokeController.getPokemonsByPage);
router.get('/search', pokeController.searchPokemons);

module.exports = router;
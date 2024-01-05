const axios = require('axios');

exports.getAllPokemons = async (req, res) => {
  try {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
    const pokemons = data.results.map((pokemon) => pokemon.name).sort();
    res.json(pokemons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
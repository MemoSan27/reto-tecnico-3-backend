const axios = require('axios');

exports.getAllPokemons = async (req, res) => {
    try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
        const pokemons = data.results.sort((a, b) => a.name.localeCompare(b.name)).map((pokemon) => pokemon);
        res.json(pokemons);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.getPokemonsByPage = async (req, res) => {
    const limit = req.query.limit || 10;
    const offset = req.query.page ? (req.query.page - 1) * limit : 0;
    
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
        const pokemons = data.results.sort((a, b) => a.name.localeCompare(b.name)).map((pokemon) => pokemon);;
        res.json(pokemons);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.searchPokemons = async (req, res) => {
    const id = req.params.id;
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        res.json([data]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};
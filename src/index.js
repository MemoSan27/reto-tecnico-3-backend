const express = require('express');
const cors = require('cors');
const pokemonRouter = require('./routes/pokemon.router');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/pokemons', pokemonRouter);

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
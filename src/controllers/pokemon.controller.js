const axios = require('axios');
const PDFDocument = require('pdfkit');


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

exports.getPokemonDetails = async (req, res) => {
      const { pokeId } = req.params;
        // Implementa lógica para obtener detalles del pokemon por su ID
      try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
      const pdfDoc = new PDFDocument();
      const { name, id, sprites, moves } = data;
      const movements = moves.map(move => move.move.name);
      const { front_default, front_shiny } = sprites;
      
      pdfDoc.fontSize(18).text(`Pokemon Id: ${id}`);
      pdfDoc.moveDown();
      pdfDoc.fontSize(18).text(`Pokemon Name: ${name.toUpperCase()}`);
      pdfDoc.moveDown();
      pdfDoc.fontSize(18).text(`Movements:`);
      pdfDoc.fontSize(18).text(`${movements}`);
      pdfDoc.moveDown();
      pdfDoc.text(`Pokemon Image:`);
      
      pdfDoc.image(await getImageBuffer(front_default), {
        width: 250,
      });
      
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=${id}.pdf`);
      pdfDoc.pipe(res);
      pdfDoc.end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
  
}  

const getImageBuffer = async (imageUrl) => {
    try {
      const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      return Buffer.from(response.data, 'binary');
    } catch (error) {
      throw error;
    }
  };


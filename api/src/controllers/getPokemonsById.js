const axios = require('axios');
const { Pokemons } = require('../db');

const getPokemonsById = async (req, res) => {
    const { id } = req.params;

    try {
        if (!id) return res.status(404).send('That pokemon id does not exist :(');

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonData = response.data;

        if (pokemonData) {
            const existPokemon = await Pokemons.findOne({ where: { id: pokemonData.id } });

            if (existPokemon) {
                return res.status(200).json(existPokemon);
            }

            const pokeData = {
                id: pokemonData.id,
                name: pokemonData.name,
                image: pokemonData.sprites.other.home.front_default || null,
                health: pokemonData.stats.find(stat => stat.stat.name === 'hp').base_stat || null,
                attack: pokemonData.stats.find(stat => stat.stat.name === 'attack').base_stat || null,
                defense: pokemonData.stats.find(stat => stat.stat.name === 'defense').base_stat || null,
                speed: pokemonData.stats.find(stat => stat.stat.name === 'speed').base_stat || null,
                height: pokemonData.height,
                weight: pokemonData.weight,
                types: pokemonData.types.map(stat => stat.type.name).join(', '),
            };

            await Pokemons.create(pokeData);
            return res.status(200).json(pokeData);
        } else {
            return res.status(404).send('Id pokemon not found.');
        }
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = { getPokemonsById };

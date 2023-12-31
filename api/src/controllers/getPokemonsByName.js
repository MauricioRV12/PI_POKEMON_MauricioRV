const axios = require("axios");
const { Pokemons } = require('../db');

const getPokemonsByName = async (req, res) => {
    const { name } = req.query;

    try {
        if(!name) return res.status(404).send('that is not a pokemon name!');

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pokemonData = response.data;

        if(pokemonData) {
            const allMatchPokemons = {
                id: pokemonData.id,
                name: pokemonData.name,
                image: pokemonData.sprites.other.home.front_default || null,
                health: pokemonData.stats.find(stat => stat.stat.name === 'hp').base_stat || null,
                attack: pokemonData.stats.find(stat => stat.stat.name === 'attack').base_stat || null,
                defense: pokemonData.stats.find(stat => stat.stat.name === 'defense').base_stat || null,
                speed: pokemonData.stats.find(stat => stat.stat.name === 'speed').base_stat || null,
                height: pokemonData.height,
                weight: pokemonData.weight,
            };

                const existPokemon = await Pokemons.findOne({where: {name: allMatchPokemons.name}});

                if(!existPokemon){
                    await Pokemons.create(allMatchPokemons);
                }

            return res.status(200).json(allMatchPokemons);
        } else {
            return res.status(404).send('Pokemon not found.')
        };

    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};

module.exports = { getPokemonsByName };
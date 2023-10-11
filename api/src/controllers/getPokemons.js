const axios = require('axios');

const stats = {};

const getPokemons = async (req, res) => {
    try {
        let allPokemons = [];

        const totalPages = 5; // Primeras 5 páginas

        for (let page = 1; page <= totalPages; page++) {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}&limit=20`);
            const pokemonsData = response.data.results;

            const pagePokemons = await Promise.all(pokemonsData.map(async (pokemon) => {
                const pokeResponse = await axios.get(pokemon.url);
                const pokeInfo = pokeResponse.data;

                const imageUrl = pokeInfo.sprites.other.home.front_default;

                pokeInfo.stats.forEach(stat => {
                    stats[stat.stat.name] = stat.base_stat;
                });

                return {
                    id: pokeInfo.id,
                    name: pokeInfo.name,
                    image: imageUrl,
                    health: stats.hp || null,
                    attack: stats.attack || null,
                    defense: stats.defense || null,
                    speed: stats.speed || null,
                    height: pokeInfo.height,
                    weight: pokeInfo.weight,
                };
            }));

            allPokemons = allPokemons.concat(pagePokemons);
        }

        return res.status(200).json(allPokemons);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { getPokemons };




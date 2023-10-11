const { Pokemons, Type } = require('../db');

const postPokemons = async (req, res) => {
    const { name, health, attack, defense, speed, height, weight, types } = req.body;

    try {
        if (!name || !health || !attack || !defense || !speed || !height || !weight) {
            return res.status(400).send('Faltan Datos');
        }

        const newPokemon = await Pokemons.create({
            name,
            image: 'client/src/images/31258.png',
            health,
            attack,
            defense,
            speed,
            height,
            weight,
        });

        // Asocia los tipos al nuevo Pokémon
        if (types && types.length > 0) {
            const typeRecords = await Type.findAll({ where: { id: types } });
            if (typeRecords.length > 0) {
                await newPokemon.addTypes(typeRecords);
            }
        }

        return res.status(200).json(newPokemon);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { postPokemons };

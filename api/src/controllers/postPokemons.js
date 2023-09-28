// const { Pokemons, Type } = require('../db');

// const postPokemons = async (req, res) => {
//     const {name, health, attack, defense, speed, height, weight} = req.body;

//     try {
//         if(!name || !health || !attack || !defense || !speed || !height || !weight){
//             return res.status(400).send('Faltan Datos');
//         }
//         const pokemon = await Pokemons.findOrCreate({where: {name, health, attack, defense, speed, height, weight}});

//         for(typesId of types){
//             const newPokemon = await Type.findByPk(typesId);
//             if(newPokemon){
//                 await pokemon.addTypes(newPokemon);
//             };
//         };

//         return res.status(200).json(pokemon);

//     } catch (error) {
//         return res.status(500).json({error: error.message});
//     }
// };

// module.exports = { postPokemons };



const { Pokemons, Type } = require('../db');

const postPokemons = async (req, res) => {
    const { name, health, attack, defense, speed, height, weight, types } = req.body;

    try {
        if (!name || !health || !attack || !defense || !speed || !height || !weight) {
            return res.status(400).send('Faltan Datos');
        }

        // Crea el nuevo Pokémon
        const newPokemon = await Pokemons.create({
            name,
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

        // Retorna el Pokémon creado con los tipos asociados
        return res.status(200).json(newPokemon);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { postPokemons };

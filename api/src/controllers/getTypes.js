const axios = require('axios');
const { Type } = require('../db');

const getTypes = async (req, res) => {
    try {

        let allTypes = [];
        // Hacemos un bucle para obtener todos los tipos de todas las páginas
        let nextPage = 'https://pokeapi.co/api/v2/type';
        
        while (nextPage) {
            const response = await axios.get(nextPage);
            const dataType = response.data;

            // Agregamos los tipos de la página actual a la lista de tipos
            allTypes = allTypes.concat(dataType.results.map(type => type.name));

            // Si hay una página siguiente, obtenemos los tipos de esa página
            nextPage = dataType.next;
        };
        
        // Almacena en DB
        const existingTypes = await Type.findAll();
        if (existingTypes.length === 0) {
            for (const typeName of allTypes) {
                await Type.create({ name: typeName });
            }
        };

        return res.status(200).json(allTypes);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { getTypes };

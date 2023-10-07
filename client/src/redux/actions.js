import axios from 'axios';

export const filterCards = (type) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
      const pokemonOfType = data.pokemon.map((pokemonData) => pokemonData.pokemon);
      console.log(pokemonOfType);

      dispatch({
        type: "FILTER",
        payload: pokemonOfType,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const orderByName = (name) => {
    return {
        type: "ORDER",
        payload: name
    }
};

/******************************************************************************* */
// export const orderByAttack = (attack) => {
//     return {
//         type: "ORDER_ATTACK",
//         payload: attack
//     }
// };

export function orderByAttack(type) {
  console.log(type);
  if (type === "less") {
    return {
      type: "ORDER_ATTACK_DESCENDING",
    };
  }
  if (type === "more") {
    return {
      type: "ORDER_ATTACK_ASCENDING",
    };
  }
};
/*********************************************************************************** */

// export const addPokemon = (newPokemon) => {
//   return {
//     type: "ADD_POKEMON",
//     payload: newPokemon
//   }
// };

export const addPokemon = (newPokemon) => {
  return async (dispatch) => {
    try {
      // Realiza una solicitud POST al servidor para agregar el nuevo Pokémon
      const response = await axios.post('http://localhost:3001/pokemons', newPokemon);

      // Verifica si la solicitud fue exitosa (deberías establecer una lógica de manejo de errores)
      if (response.status === 200) {
        // Dispara una acción para actualizar el estado si es necesario
        dispatch({
          type: "ADD_POKEMON",
          payload: newPokemon
        });
      }
    } catch (error) {
      console.error('Error adding new Pokémon:', error);
    }
  };
};


export const fetchPokemons = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=120`);
      dispatch(setPokemons(data.results)); // Actualiza el estado
      console.log(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
};
  
export const setPokemons = (pokemons) => {
  return {
    type: "SET_POKEMONS",
    payload: pokemons
  }
};
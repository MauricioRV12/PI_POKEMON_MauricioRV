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

export const setPokemons = (pokemons) => {
    return {
        type: "SET_POKEMONS",
        payload: pokemons
    }
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

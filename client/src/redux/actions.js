import axios from 'axios';

export const filterCards = (type) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
      const pokemonOfType = data.pokemon.map((pokemonData) => pokemonData.pokemon);

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

export const orderByAttack = (filterPokemons) => {
  console.log(filterPokemons);
      return {
      type: "ORDER_ATTACK",
      payload: filterPokemons
    };
};

export const addPokemon = (newPokemon) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/pokemons', newPokemon);

      if (response.status === 200) {
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
      dispatch(setPokemons(data.results));
     // console.log(data.results);
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
import axios from 'axios';

export const filterCards = () => {
    try {
        return async (dispatch) =>{
            const {data} = await axios.get("https://pokeapi.co/api/v2/type");
            return dispatch ({
                type: "FILTER",
                payload: data
            })
        }
        
    } catch (error) {
        console.log(error.message);
    }
};

export const orderByName = (name) => {
    return {
        type: "ORDER",
        payload: name
    }
};

export const orderByAttack = (attack) => {
    return {
        type: "ORDER_ATTACK",
        payload: attack
    }
};

export const setPokemons = (pokemons) => {
    return {
        type: "SET_POKEMONS",
        payload: pokemons
    }
};
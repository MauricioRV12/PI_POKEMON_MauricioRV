const initialState = {
    filterPokemons: [],
    pokemons: [],
    newPokemon: {},
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FILTER":
          return {
              ...state,
              pokemons: action.payload
          };
        case "ORDER":
            const allPokemonsCopy = [...state.pokemons];
          return {
            ...state,
            pokemons: action.payload === "A" 
            ? allPokemonsCopy.sort((a,b)=>{
              if(a.name > b.name) return -1;
              if(b.name > a.name) return 1;
              return 0;
            })
            : allPokemonsCopy.sort((a,b)=>{
              if(a.name > b.name) return 1;
              if(b.name > a.name) return -1;
              return 0;
            })
          };
        case "ORDER_ATTACK":
            const filterPokemons = action.payload;
            const allPokemonsAttackCopy = [...state.pokemons];

            console.log(action.payload);
            console.log(allPokemonsAttackCopy);
          
          return {
            ...state,
            filterPokemons: filterPokemons
              ? allPokemonsAttackCopy.sort((a, b) => {
                  const attackA = a.stats.find(stat => stat.stat.name === 'attack').base_stat;
                  const attackB = b.stats.find(stat => stat.stat.name === 'attack').base_stat;
                  return attackA - attackB;
                })
              : allPokemonsAttackCopy.sort((a, b) => {
                  const attackA = a.stats.find(stat => stat.stat.name === 'attack').base_stat;
                  const attackB = b.stats.find(stat => stat.stat.name === 'attack').base_stat;
                  return attackB - attackA;
                })
          };

        case "ADD_POKEMON":
          return {
            ...state,
            newPokemon: action.payload
          };

        case "SET_POKEMONS":
            return {
             ...state,
             filterPokemons: action.payload,
             pokemons: action.payload
            };
           
        default:
            return {...state};
    };
};

export default reducer;
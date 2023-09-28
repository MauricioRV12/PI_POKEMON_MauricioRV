const initialState = {
    filterPokemons: [],
    pokemons: [], // todos los pokemons
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
            const allPokeAttackCopy = [...state.pokemons];
            return {
                ...state,
                pokemons: action.payload === 1
                ? allPokeAttackCopy.sort((a,b)=>a.stats.base_stat.name === "attack" - b.stats.base_stat.name === "attack")
                : allPokeAttackCopy.sort((a,b)=>b.stats.base_stat.name === "attack" - a.stats.base_stat.name === "attack")
            };
        case "SET_POKEMONS":
            return {
                ...state,
                filterPokemons: action.payload,
                pokemons: action.payload
            };
        default:
            return {...state};
    }
};

export default reducer;
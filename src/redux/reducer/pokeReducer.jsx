import { getDetail } from "../../services/PokeService";

/* eslint-disable default-case */
const INITIAL_STATE = {
    pokemonsList: [],
    filteredList: [],
    pokedeck: [],
    selected: {},
    loaded: false,
    type: "",
    filter: "ALL"
};

export default function pokeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "LOADPOKEMONS": {
            return {
                ...state,
                pokemonsList: action.payload.list,
                selected: {},
                loaded: action.payload.loaded
            };
        }
        case "ADDTODECK": {
            const newDeck = [...state.pokedeck];
            newDeck.unshift(action.payload)
            return {
                ...state,
                pokedeck: newDeck
            }
        }
        case "REMOVEFROMDECK": {
            const newDeck = [...state.pokedeck];
            let index = 0;
            newDeck.forEach((p, n) => {
                if (action.payload == p.name) {
                    index = n;
                    return;
                }
            });
            newDeck.splice(index, 1);
            return {
                ...state,
                pokedeck: newDeck,
            }
        }
        case "REMOVEINDEX": {
            const newDeck = [...state.pokedeck];
            newDeck.splice(action.payload, 1);
            return {
                ...state,
                pokedeck: newDeck,
            }
        }
        case "CLEARDECK": {
            const newDeck = [];
            return {
                ...state,
                pokedeck: newDeck,
            }
        }
        case "DETAILS": {
            return {
                ...state,
                selected: { ...action.payload },
            };
        }
        case "FILTER": {
            // console.log("FILTER", action.payload);
            const newFilteredList = [];
            if (action.payload.filter !== "ALL") {
                state.pokemonsList.forEach((pokemon,index) => {
                    console.log(index);
                    // if (pokemon.type.name === action.payload.filter) {
                    //     newFilteredList.push(pokemon);
                    //     console.log(pokemon);
                    // }
                });
            }
            return {
                ...state,
                filteredList: newFilteredList,
                filter: action.payload.filter
            }
        }
    }
    return state;
}



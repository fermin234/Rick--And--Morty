import {
  GET_CHARACTERS,
  INFINITE_SCROLL,
  CLEAN_FILTERS,
  FILTER,
} from "./actions";

const initialState = {
  characters: [],
  filteredItems: [],
  items: [],
  filterValues: {
    name: null,
    species: null,
    type: null,
    status: null,
    gender: null,
  },
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        items: [...action.payload.slice(0, 30)],
      };

    case INFINITE_SCROLL:
      const sliceCharacters = [
        ...state.items,
        ...state.characters.slice(state.items.length, state.items.length + 25),
      ];

      return {
        ...state,
        items: sliceCharacters,
      };

    case CLEAN_FILTERS:
      return {
        ...state,
        items: [...state.characters.slice(0, 30)],
        filterValues: {
          name: null,
          species: null,
          type: null,
          status: null,
          gender: null,
        },
      };

    case FILTER:
      const filterCharacters = [];

      return {
        ...state,
        filteredItems: filterCharacters,
        items: filterCharacters.splice(0, 30),
        filterValues: action.payload,
      };

    default:
      return { ...state };
  }
}

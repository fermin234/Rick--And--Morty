import {
  FILTER,
  GET_TYPES,
  GET_ORIGIN,
  GET_SPECIES,
  RESET_SCROLL,
  CLEAN_FILTERS,
  GET_CHARACTERS,
  INFINITE_SCROLL,
} from "./actions";

const initialState = {
  characters: [],
  species: [],
  types: [],
  origin: [],
  items: [],
  filteredItems: [],
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
        filteredItems: action.payload,
        items: [...action.payload.slice(0, 30)],
      };

    case INFINITE_SCROLL:
      let sliceCharacters = [
        ...state.items,
        ...state.filteredItems.slice(
          state.items.length,
          state.items.length + 25
        ),
      ];

      return {
        ...state,
        items: sliceCharacters,
      };

    case CLEAN_FILTERS:
      return {
        ...state,
        filteredItems: state.characters,
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
      return {
        ...state,
        filteredItems: [...action.payload.data],
        items: action.payload.data.slice(0, 30),
        filterValues: action.payload.filterValues,
      };

    case GET_SPECIES:
      return {
        ...state,
        species: action.payload,
      };

    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    case GET_ORIGIN:
      return {
        ...state,
        origin: action.payload,
      };

    case RESET_SCROLL:
      return {
        ...state,
        items: [...state.filteredItems.slice(0, 30)],
      };

    default:
      return { ...state };
  }
}

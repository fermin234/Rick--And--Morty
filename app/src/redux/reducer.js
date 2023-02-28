import { GET_CHARACTERS, INFINITE_SCROLL } from "./actions";

const initialState = {
  characters: [],
  items: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        items: [...action.payload.slice(0, 25)],
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

    default:
      return { ...state };
  }
}

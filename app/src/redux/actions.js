import axios from "axios";
export const FILTER = "FILTER";
export const GET_SPECIES = "GET_SPECIES";
export const RESET_SCROLL = "RESET_SCROLL";
export const CLEAN_FILTERS = "CLEAN_FILTERS";
export const GET_CHARACTERS = "GET_CHARACTERS";
export const INFINITE_SCROLL = "INFINITE_SCROLL";
export const HANDLE_DARK = "HANDLE_DARK";

export function characters() {
  try {
    return async (dispatch) => {
      let result = await axios.get("/character");
      return dispatch({
        type: GET_CHARACTERS,
        payload: result.data,
      });
    };
  } catch (err) {
    return err;
  }
}

export function fetchMoreData(data) {
  try {
    return async (dispatch) => {
      return dispatch({
        type: INFINITE_SCROLL,
        payload: data,
      });
    };
  } catch (err) {
    return err;
  }
}

export function cleanFilters() {
  return async (dispatch) => {
    return dispatch({
      type: CLEAN_FILTERS,
    });
  };
}

export function filter(data) {
  const obj = {};
  for (const key in data) {
    if (data[key] !== null) {
      obj[key] = data[key];
    }
  }
  return async (dispatch) => {
    const result = await axios.get(`/character?data=${JSON.stringify(obj)}`);
    return dispatch({
      type: FILTER,
      payload: {
        filterValues: data,
        data: result.data,
      },
    });
  };
}

export function getSpecies() {
  return async (dispatch) => {
    const result = await axios.get("/species");
    return dispatch({
      type: GET_SPECIES,
      payload: result.data,
    });
  };
}

export function resetScroll() {
  return async (dispatch) => {
    return dispatch({
      type: RESET_SCROLL,
    });
  };
}

export function handleDarkModeToggle(boolean) {
  return async (dispatch) => {
    return dispatch({
      type: HANDLE_DARK,
      payload: boolean,
    });
  };
}

import axios, { Axios } from "axios";
export const GET_CHARACTERS = "GET_CHARACTERS";
export const INFINITE_SCROLL = "INFINITE_SCROLL";
export const CLEAN_FILTERS = "CLEAN_FILTERS";
export const FILTER = "FILTER";

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
  return async (dispatch) => {
    await axios.get(`/character?filterValues=${data}`);
    return dispatch({
      type: FILTER,
      payload: data,
    });
  };
}

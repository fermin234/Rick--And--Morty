import axios from "axios";
export const GET_CHARACTERS = "GET_CHARACTERS";

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

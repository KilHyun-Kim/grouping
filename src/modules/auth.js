import { createAction, handleActions } from "redux-actions";

const SAMPLE_ACITON = "auth/SAMPLE_ACTION";

export const sampleAction = createAction(SAMPLE_ACITON);

const initialState = {};

const auth = handleActions(
  {
    [SAMPLE_ACITON]: (state, action) => state,
  },
  initialState
);

export default auth;

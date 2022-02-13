import { combineReducers } from "redux";
import * as types from "../config/types";

const initialState = {
  loading: false,
  users: [],
  error: null,
  selectRecord: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case types.GET_USERS_SUCCESS: {
      return {
        ...state,
        loading: action.payload.loading,
        users: action.payload.users
      };
    }
    case types.GET_USERS_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    case types.GET_SELECTED_RECORDS: {
      return {
        ...state,
        selectRecord: action.payload.selectRecord
      };
    }
    default:
      return state;
  }
};

export default combineReducers({
  users: userReducer
});

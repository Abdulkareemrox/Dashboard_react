import * as types from "../config/types";
export function fetchUsers() {
  return {
    type: types.GET_USERS_REQUEST,
    payload: {
      loading: true
    }
  };

}

export function selectedRecord(selectRecord){

  return {
    type: types.GET_SELECTED_RECORDS,
    payload: {
      selectRecord: selectRecord
    }
  };
}

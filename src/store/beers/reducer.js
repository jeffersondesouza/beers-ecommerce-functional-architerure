import INITIAL_STATE from "./state";
import Types from "./constants";

import { invitationsState } from "./selectors";

const beersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOAD_FRIENDS_REQUEST:
      return {
        ...state,
        isLoadingFriends: true,
        loadFriendsFailed: false
      };
    case Types.LOAD_FRIENDS_SUCCESS:
      return {
        ...state,
        ...invitationsState(state, action.payload),
        error: {}
      };
    case Types.LOAD_FRIENDS_FAILURE:
      return {
        ...state,
        error: { ...action.error },
        isLoadingFriends: false,
        loadFriendsFailed: true
      };
    default:
      return state;
  }
};

export default beersReducer;

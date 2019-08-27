import {
  LOAD_FRIENDS_REQUEST,
  LOAD_FRIENDS_SUCCESS,
  LOAD_FRIENDS_FAILURE,
} from './constants';

const loadFriendsRequest = token => ({
  type: LOAD_FRIENDS_REQUEST,
  payload: token,
});

const loadFriendsSuccess = payload => ({
  type: LOAD_FRIENDS_SUCCESS,
  payload,
});

const loadFriendsFailure = error => ({
  type: LOAD_FRIENDS_FAILURE,
  error,
});

export default {
  loadFriendsRequest,
  loadFriendsSuccess,
  loadFriendsFailure,
};

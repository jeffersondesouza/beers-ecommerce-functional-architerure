import setInvitedFriends from './setInvitedFriends';
import remainingInvitations from './remainingInvitations';

export default (state, payload) => {
  return {
    remainingInvitations: remainingInvitations(
      state.maxInvitations,
      payload.total
    ),
    total: payload.total,
    invitedFriends: setInvitedFriends(payload.response),
    isLoadingFriends: false,
    loadFriendsFailed: false,
  };
};

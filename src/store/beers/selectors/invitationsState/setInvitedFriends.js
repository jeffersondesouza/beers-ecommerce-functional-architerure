export default (invitedFriends = []) =>
  invitedFriends.map(user => ({
    addressState: user.address__state,
    firstName: user.user__first_name,
    lastName: user.user__last_name,
  }));

export default (maxInvitations, total) => {
  const diff = maxInvitations - total;
  return diff < 0 ? 0 : diff;
};

let _currentUser = null;

module.exports = {
  get() {
    return _currentUser;
  },
  set(newToken) {
    _currentUser = newToken;
  }
};
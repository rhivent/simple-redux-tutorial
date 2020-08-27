export default (() => {
  const _getToken = () => {
    return JSON.parse(localStorage.getItem('auth'));
  }
  const _setToken = objToken => {
    return localStorage.setItem('auth',JSON.stringify(objToken));
  }
  const _clearToken = () => {
    return localStorage.removeItem('auth');
  }

  return {
    getToken:_getToken(),
    setToken:params => _setToken(params),
    clearToken:_clearToken(),
  }
})();
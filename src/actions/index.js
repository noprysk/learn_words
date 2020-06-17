import {auth} from '../firebase.js';

export function login(values) {
  return function(dispatch) {
    auth
      .signInWithEmailAndPassword("nazariy.oprysk@gmail.com", "Nazar_1985")
      .then(result => dispatch(loginSuccess(result.user)))
      .catch(function(error) {
        return {
          type: 'LoginFailed',
          payload: error,
        };
      });
  };
}

export function loginSuccess(user) {
  return {
    type: 'Login',
    payload: user,
  };
}

export function logout() {
  return function(dispatch) {
    auth
      .signOut()
      .then(() => dispatch(LogoutSuccess()))
      .catch(function(error) {
        return {
          type: 'LogoutFailed',
          payload: error,
        };
      });
  };
}

export function LogoutSuccess() {
  return {
    type: 'Logout',
  };
}

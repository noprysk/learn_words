let auth = {isSignedIn: false, user: {}, error: ''};

export default function(state = auth, action) {
  switch (action.type) {
    case 'Login':
      auth = {
        isSignedIn: true,
        user: {
          name: action.payload.displayName,
          email: action.payload.email,
          uid: action.payload.uid,
        },
        error: '',
      };
      console.log('auth: ', auth);
      break;
    case 'LoginFailed':
      auth = {isSignedIn: false, user: {}, error: action.payload};
      break;
    case 'Logout':
      auth = {isSignedIn: false, user: {}, error: ''};
      break;
    case 'LogoutFailed':
      auth = {
        isSignedIn: state.isSignedIn,
        user: state.user,
        error: action.payload,
      };
      break;
  }

  return auth;
}

let user = {};

export default function(state = user, action) {
  switch (action.type) {
    case 'Login':
      user = {name: 'Nazar'};
      break;
    case 'Logout':
      user = {};
      break;
  }

  return user;
}

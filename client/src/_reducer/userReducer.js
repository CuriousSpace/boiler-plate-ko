const initialState = {
  user: null,
  isAuth: false,
  loading: false,
  error: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'REGISTER_USER_SUCCESS':
    case 'LOGIN_USER_SUCCESS':
    case 'AUTH_USER_SUCCESS':
      return { ...state, user: action.payload, isAuth: action.payload.isAuth, loading: false, error: null };
    case 'LOGOUT_USER_SUCCESS':
      return { ...state, user: null, isAuth: false, loading: false, error: null };
    case 'REGISTER_USER_FAIL':
    case 'LOGIN_USER_FAIL':
    case 'AUTH_USER_FAIL':
    case 'LOGOUT_USER_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
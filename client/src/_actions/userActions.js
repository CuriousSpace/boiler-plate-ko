import axios from 'axios';

export const registerUser = (dataToSubmit) => async dispatch => {
  try {
    const res = await axios.post('/api/users/register', dataToSubmit);
    dispatch({ type: 'REGISTER_USER_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'REGISTER_USER_FAIL', payload: err.response?.data });
  }
};

export const loginUser = (dataToSubmit) => async dispatch => {
  try {
    const res = await axios.post('/api/users/login', dataToSubmit, { withCredentials: true });
    dispatch({ type: 'LOGIN_USER_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'LOGIN_USER_FAIL', payload: err.response?.data });
  }
};

export const authUser = () => async dispatch => {
  try {
    const res = await axios.get('/api/user/auth', { withCredentials: true });
    dispatch({ type: 'AUTH_USER_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'AUTH_USER_FAIL', payload: err.response?.data });
  }
};

export const logoutUser = () => async dispatch => {
  try {
    const res = await axios.get('/api/users/logout', { withCredentials: true });
    dispatch({ type: 'LOGOUT_USER_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'LOGOUT_USER_FAIL', payload: err.response?.data });
  }
};
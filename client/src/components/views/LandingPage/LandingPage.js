import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../_actions/userActions';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(state => state.user.user);

  const onLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 100 }}>
      <h2>Welcome! This is a LandingPage.</h2>
      {user?.loginSuccess && (
        <button
          onClick={onLogout}
          style={{
            marginTop: 24,
            padding: '8px 24px',
            borderRadius: 4,
            border: 'none',
            background: '#ff4d4f',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      )}
    </div>
  )
}

export default LandingPage

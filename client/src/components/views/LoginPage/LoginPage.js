import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../_actions/userActions';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const user = useSelector(state => state.user.user);
  const error = useSelector(state => state.user.error);

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  React.useEffect(() => {
    if (user && user.loginSuccess) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div style={{ marginTop: 100, textAlign: 'center' }}>
      <form onSubmit={onSubmit} style={{ display: 'inline-block', padding: 20, border: '1px solid #ddd', borderRadius: 8 }}>
      <input name="email" value={form.email} onChange={onChange} 
        style={{ display: 'block', margin: '10px auto', padding: 8, width: 200, borderRadius: 4, border: '1px solid #ccc' }}
          required
        />
      <input name="password" type="password" value={form.password} onChange={onChange} 
        style={{ display: 'block', margin: '10px auto', padding: 8, width: 200, borderRadius: 4, border: '1px solid #ccc' }}
        required
      />
      <button 
        type="submit"
        style={{ marginTop: 12, padding: '8px 24px', borderRadius: 4, border: 'none', background: '#1677ff', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}
      >
          Login
        </button>
      {error && <div style={{ color: 'red', marginTop: 12 }}>{error.message}</div>}
    </form>
    </div>
  )
}

export default LoginPage

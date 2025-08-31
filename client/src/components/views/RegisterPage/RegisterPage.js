import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../_actions/userActions';

function RegisterPage() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const error = useSelector(state => state.user.error);

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    dispatch(registerUser(form));
  };

  return (
    <form onSubmit={onSubmit}>
      <input name="email" value={form.email} onChange={onChange} />
      <input name="password" type="password" value={form.password} onChange={onChange} />
      <input name="name" value={form.name} onChange={onChange} />
      <button type="submit">회원가입</button>
      {error && <div>{error.message}</div>}
    </form>
  );
}

export default RegisterPage

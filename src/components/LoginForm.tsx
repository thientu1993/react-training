/** @format */
import React, { useRef, useState } from 'react';
import InputText from './InputText';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const usernameValue = usernameRef.current?.value || '';
    const passwordValue = passwordRef.current?.value || '';
    let formIsValid = true;
    let newErrors = { username: '', password: '' };

    if (!usernameValue) {
      formIsValid = false;
      newErrors.username = 'Username is required';
    } else if (!validateEmail(usernameValue)) {
      formIsValid = false;
      newErrors.username = 'Username must be a valid email';
    }

    if (!passwordValue) {
      formIsValid = false;
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    if (formIsValid) {
      console.log('Form submitted:', { username: usernameValue, password: passwordValue });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputText
        label='Username'
        value={username}
        onChange={handleUsernameChange}
        ref={usernameRef}
      />
      {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}

      <InputText
        label='Password'
        type='password'
        value={password}
        onChange={handlePasswordChange}
        ref={passwordRef}
      />
      {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

      <button type='submit'>Login</button>
    </form>
  );
};

export default LoginForm;

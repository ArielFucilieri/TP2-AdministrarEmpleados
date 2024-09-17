/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from '../styles/LoginForm.module.css';

const LoginForm = ({ onLogin, error, setError }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
  };

  const handleFocus = () => {
    setError('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {error && <p className={styles.error}>{error}</p>}
      <label>
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onFocus={handleFocus}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={handleFocus}
        />
      </label>
      <div className={styles.buttonContainer}>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;

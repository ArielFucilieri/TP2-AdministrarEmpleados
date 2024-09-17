import { useContext, useState } from 'react';
import { LoginForm } from '../components';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (user) => {
    fetch(`http://localhost:3000/users?username=${user.username}&password=${user.password}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          login(data[0]);
          navigate('/home');
        } else {
          setError('Username o Password incorrecto');
        }
      })
      .catch(() => setError('Error al conectar con el servidor'));
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} error={error} setError={setError} />
    </div>
  );
};

export default LoginPage;


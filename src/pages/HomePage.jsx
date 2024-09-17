import { useContext } from 'react';
import { Home } from '../components';
import { AuthContext } from '../contexts/AuthContext';

const HomePage = () => {
  const { auth } = useContext(AuthContext);

  return <Home user={auth.user} />;
};

export default HomePage;

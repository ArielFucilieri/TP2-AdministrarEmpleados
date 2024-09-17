import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const { auth, logout } = useContext(AuthContext);
  const user = auth.user;

  return (
    <nav className={styles.navbar}>
      {user && (
        <>
          <div className={styles.links}>
            <Link to="/home">Home</Link>
            <Link to="/employees">Empleados</Link>
          </div>
          <div className={styles.welcomeSection}>
            <span className={styles.welcomeMessage}>
              Bienvenido {user.username ? user.username : 'Invitado'}
            </span>
            <button className={styles.logoutButton} onClick={logout}>
              Cerrar Sesión
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;

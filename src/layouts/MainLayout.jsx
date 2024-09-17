/* eslint-disable react/prop-types */
import { Navbar } from '../components';
import styles from '../styles/MainLayout.module.css';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import styles from '../styles/Home.module.css';

const Home = () => {
  const { auth } = useContext(AuthContext);
  const user = auth.user; 

  return (
    <div className={styles.home}>
      <h1>Bienvenido {user ? user.username : 'Invitado'}</h1>
      
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</h3>

      <h4>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et d
        olore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem 
        ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum 
        iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui 
        dolorem eum fugiat quo voluptas nulla pariatur?</h4>

    </div>
  );
};

export default Home;

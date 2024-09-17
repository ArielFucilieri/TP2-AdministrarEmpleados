import { useNavigate } from 'react-router-dom';
import { EmployeeForm } from '../components';
import styles from '../styles/AddEmployeePage.module.css';

const AddEmployeePage = () => {
  const navigate = useNavigate();

  const handleSubmit = (newEmployee) => {
    fetch('http://localhost:3000/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEmployee),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo agregar el empleado');
        }
        return response.json();
      })
      .then(() => {
        navigate('/employees');
      })
      .catch((error) => {
        console.error('Error al agregar empleado:', error);
        alert('No se pudo agregar el empleado. Por favor inténtalo de nuevo.');
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <EmployeeForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddEmployeePage;



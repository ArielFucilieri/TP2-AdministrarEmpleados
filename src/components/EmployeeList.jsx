/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import styles from '../styles/EmployeeList.module.css';
import { Link } from 'react-router-dom';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  const { auth } = useContext(AuthContext);
  const user = auth.user;

  return (
    <div className={styles.tableContainer}>
      {user && user.admin && (
        <div className={styles.addButtonContainer}>
          <Link to="/add-employee">
            <button className={styles.editButton}>Agregar Empleado</button>
          </Link>
        </div>
      )}

      <table className={styles.employeeTable}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Rol</th>
            {onEdit && <th></th>}
            {onDelete && <th></th>}
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.lastname}</td>
                <td>{employee.email}</td>
                <td>{employee.rol}</td>
                {onEdit && (
                  <td>
                    <button onClick={() => onEdit(employee)}>Editar</button>
                  </td>
                )}
                {onDelete && (
                  <td>
                    <button className={styles.deleteButton} onClick={() => onDelete(employee)}>Eliminar</button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>No hay empleados disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;


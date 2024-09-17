/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import styles from '../styles/AddEmployeePage.module.css';

const EmployeeForm = ({ employee, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    rol: '',
  });

  useEffect(() => {
    if (employee) {
      setFormData({
        name: employee.name || '',
        lastname: employee.lastname || '',
        email: employee.email || '',
        rol: employee.rol || '',
      });
    }
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.lastname || !formData.email || !formData.rol) {
      alert('Por favor complete todos los campos');
      return;
    }
    onSubmit(formData);
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Apellido:
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Rol:
        <input
          type="text"
          name="rol"
          value={formData.rol}
          onChange={handleChange}
        />
      </label>
      <div className={styles.buttonWrapper}>
        <button type="submit" className={styles.saveButton}>Guardar</button>
      </div>
    </form>
  );
};

export default EmployeeForm;





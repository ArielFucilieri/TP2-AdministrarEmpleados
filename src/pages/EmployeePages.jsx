/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from 'react';
import { EmployeeList, EmployeeForm, Modal } from '../components';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const loadEmployees = () => {
    fetch('http://localhost:3000/employees')
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error('Error al recuperar empleados:', error));
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };

  const handleSubmit = (updatedEmployee) => {
    fetch(`http://localhost:3000/employees/${selectedEmployee.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedEmployee),
    })
    .then(() => {
      loadEmployees();
      handleCloseModal();
    })
    .catch((error) => console.error('Error al actualizar empleado:', error));
  };

  const handleDelete = (employee) => {
    fetch(`http://localhost:3000/employees/${employee.id}`, {
      method: 'DELETE',
    })
    .then(() => {
      setEmployees(employees.filter((e) => e.id !== employee.id));
    })
    .catch((error) => console.error('Error al eliminar empleado:', error));
  };

  return (
    <>
      <EmployeeList
        employees={employees}
        onEdit={auth.user?.admin ? handleEdit : null}
        onDelete={auth.user?.admin ? handleDelete : null}
      />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedEmployee && (
          <EmployeeForm
            employee={selectedEmployee}
            onSubmit={handleSubmit}
          />
        )}
      </Modal>
    </>
  );
};

export default EmployeesPage;


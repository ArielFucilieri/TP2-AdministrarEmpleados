import { useState, useEffect } from 'react';
import { EmployeeForm } from '../components';
import { useParams, useNavigate } from 'react-router-dom';

const EditEmployeePage = () => {
  const [employee, setEmployee] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/employees/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Empleado no encontrado');
        }
        return res.json();
      })
      .then((data) => setEmployee(data))
      .catch((error) => {
        console.error(error);
        navigate('/employees');
      });
  }, [id, navigate]);

  const handleSubmit = (updatedEmployee) => {
    fetch(`/api/employees/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedEmployee),
    }).then(() => {
      navigate('/employees');
    });
  };

  return employee ? <EmployeeForm employee={employee} onSubmit={handleSubmit} /> : <div>Loading...</div>;
};

export default EditEmployeePage;

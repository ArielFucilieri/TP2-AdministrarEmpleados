import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar } from './components';
import { HomePage, LoginPage, EmployeesPage, EditEmployeePage, AddEmployeePage } from './pages';
import { AuthContext } from './contexts/AuthContext';
import './styles/global.css';

const App = () => {
  const { auth } = useContext(AuthContext);

  return (
    <Router>
      {auth.user && <Navbar />}
      <Routes>
        <Route path="/" element={auth.user ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={auth.user ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/employees" element={auth.user ? <EmployeesPage /> : <Navigate to="/login" />} />
        <Route path="/edit-employee/:id" element={auth.user ? <EditEmployeePage /> : <Navigate to="/login" />} />
        <Route path="/add-employee" element={auth.user ? <AddEmployeePage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;

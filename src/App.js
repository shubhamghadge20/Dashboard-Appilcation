import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Logout from './pages/Logout';
import Navbar from './components/Navbar';
import { UserProvider } from './context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS import
import './index.css'; // TailwindCSS import

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
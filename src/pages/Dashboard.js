import React, { useContext } from 'react';
import UserStats from '../components/UserStats';
import UserTable from '../components/UserTable';
import Loader from '../components/Loader';
import { UserContext } from '../context/UserContext';

const Dashboard = () => {
  const { users, loading, error } = useContext(UserContext);

  if (loading) return <Loader />;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-4">
      <UserStats users={users} />
      <UserTable users={users} />
    </div>
  );
};

export default Dashboard;
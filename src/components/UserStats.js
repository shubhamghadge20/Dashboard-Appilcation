import React from 'react';

const UserStats = ({ users }) => {
  const totalUsers = users.length;
  const activeUsers = users.filter(user => user.status === 'active').length;
  const inactiveUsers = totalUsers - activeUsers;

  return (
    <div className="row mb-4">
      {/* Total Users Card */}
      <div className="col-md-4 col-sm-12 mb-3">
        <div className="card shadow-sm border-0" style={{ background: 'linear-gradient(135deg, #d4e0ff, #b0c4f7)', color: '#4a4a4a' }}>
          <div className="card-body text-center">
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>👥</div> {/* Emoji for Total Users */}
            <h5 className="card-title">Total Users</h5>
            <p className="card-text fs-3 fw-bold">{totalUsers}</p>
          </div>
        </div>
      </div>

      {/* Active Users Card */}
      <div className="col-md-4 col-sm-12 mb-3">
        <div className="card shadow-sm border-0" style={{ background: 'linear-gradient(135deg, #c7f5d3, #a8e6bc)', color: '#4a4a4a' }}>
          <div className="card-body text-center">
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>✔️</div> {/* Emoji for Active Users */}
            <h5 className="card-title">Active Users</h5>
            <p className="card-text fs-3 fw-bold">{activeUsers}</p>
          </div>
        </div>
      </div>

      {/* Inactive Users Card */}
      <div className="col-md-4 col-sm-12 mb-3">
        <div className="card shadow-sm border-0" style={{ background: 'linear-gradient(135deg, #ffe6d4, #ffc4b3)', color: '#4a4a4a' }}>
          <div className="card-body text-center">
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>❌</div> {/* Emoji for Inactive Users */}
            <h5 className="card-title">Inactive Users</h5>
            <p className="card-text fs-3 fw-bold">{inactiveUsers}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStats;

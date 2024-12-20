import React, { useState } from 'react';

const UserTable = ({ users }) => {
  const [search, setSearch] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortConfig.direction === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (sortConfig.key === 'createdDate') {
        const aDate = new Date(aValue);
        const bDate = new Date(bValue);
        return sortConfig.direction === 'asc'
          ? aDate - bDate
          : bDate - aDate;
      }

      return 0;
    }
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig((prevConfig) => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const formatDate = (date) => {
    const parsedDate = new Date(date);
    return isNaN(parsedDate.getTime()) ? 'N/A' : parsedDate.toLocaleDateString();
  };

  return (
    <div>
      {/* Search Bar */}
      <input
        type="text"
        className="form-control mb-3 shadow-sm"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      {/* Table */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover shadow-sm">
          <thead className="table-light">
            <tr>
              <th onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>
                Name {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('email')} style={{ cursor: 'pointer' }}>
                Email {sortConfig.key === 'email' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('status')} style={{ cursor: 'pointer' }}>
                Status {sortConfig.key === 'status' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('createdDate')} style={{ cursor: 'pointer' }}>
                Created Date {sortConfig.key === 'createdDate' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user) => (
              <tr key={user.id} className="table-row">
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td>{formatDate(user.createdDate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;

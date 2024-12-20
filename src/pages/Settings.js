import React, { useState } from 'react';

const Settings = () => {
  // State for handling form inputs
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [theme, setTheme] = useState('light'); // For theme toggle

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    document.body.classList.toggle('bg-dark', theme === 'light');
    document.body.classList.toggle('bg-light', theme === 'dark');
  };

  return (
    <div className="container mt-4">
      <h2>Settings</h2>
      <div className="row">
        {/* Profile Section */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Profile Settings</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={profile.name}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={profile.email}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={profile.password}
                    onChange={handleProfileChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Security Settings</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="twoFactor" className="form-label">
                    Two-Factor Authentication
                  </label>
                  <div>
                    <input type="checkbox" id="twoFactor" />
                    <span className="ms-2">Enable Two-Factor Authentication</span>
                  </div>
                </div>
                <button type="submit" className="btn btn-danger">
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Theme Section */}
        <div className="col-md-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Theme Settings</h5>
              <button
                onClick={handleThemeChange}
                className="btn btn-secondary"
              >
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

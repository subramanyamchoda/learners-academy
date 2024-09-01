import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  // Inline CSS for border style
  const borderStyle = { border: '1px solid black' };

  return (
    <div className="container mt-5 py-4 mt-md-9 text-st ">
      <div className="d-flex justify-content-center">
        <div
          className="col-md-5 animated-from-top p-4 rounded"
          style={borderStyle} 
        >
          <h2 className="text-center text-st1">Login</h2><br />
          <form>
            <div className="form-group animate__animated animate__fadeInUp ">
              <label htmlFor="userType">User Type:</label><br />
              <select
                className="form-control"
                id="userType"
                style={borderStyle} 
                name="userType"
              >
                <option value="">Select</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
            </div><br />
            <div className="form-group animate__animated animate__fadeInUp">
              <label htmlFor="uname">Username:</label>
              <input
                type="text"
                className="form-control"
                id="uname"
                name="uname"
                placeholder="Enter username"
                style={borderStyle} 
              />
            </div><br />
            <div className="form-group animate__animated animate__fadeInUp">
              <label htmlFor="pass">Password:</label>
              <input
                type="password"
                className="form-control"
                id="pass"
                name="pass"
                placeholder="Enter password"
                style={borderStyle} 
              />
            </div><br />
            <button
              type="submit"
              className="btn btn-primary btn-block animate__animated animate__fadeInUp"
            >
              Login
            </button>
          </form>
        </div>
      </div><br /><br /><br /><br />
    </div>
  );
};

export default Login;

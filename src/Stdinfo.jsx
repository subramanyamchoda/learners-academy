import React from 'react';
import { useLocation } from 'react-router-dom';

const Stdinfo = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) {
    return <div>No data available</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          Student Details
        </div>
        <div className="card-body">
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Mobile:</strong> {formData.mobile}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Date of Birth:</strong> {formData.dob}</p>
          <p><strong>Age:</strong> {formData.age}</p>
          <p><strong>Username:</strong> {formData.uname}</p>
          <p><strong>Address:</strong> {formData.address}</p>
          <p><strong>College:</strong> {formData.college}</p>
          <p><strong>Education:</strong> {formData.education}</p>
          <p><strong>Year of Pass:</strong> {formData.yop}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default Stdinfo;

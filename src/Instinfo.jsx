import React from 'react';
import { useLocation } from 'react-router-dom';

const Instinfo = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div className="container mt-5">
      <h2>Instructor Information</h2>
      <div className="card">
        <div className="card-body">
          <p><strong>First Name:</strong> {formData?.f_name}</p>
          <p><strong>Last Name:</strong> {formData?.l_name}</p>
          <p><strong>Mobile:</strong> {formData?.mobile}</p>
          <p><strong>Email:</strong> {formData?.email}</p>
          <p><strong>Date of Birth:</strong> {formData?.dob}</p>
          <p><strong>Age:</strong> {formData?.age}</p>
          <p><strong>Username:</strong> {formData?.uname}</p>
          <p><strong>Experience:</strong> {formData?.experience}</p>
          <p><strong>Education:</strong> {formData?.education}</p>
          <p><strong>Address:</strong> {formData?.address}</p>
          <p><strong>Gender:</strong> {formData?.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default Instinfo;

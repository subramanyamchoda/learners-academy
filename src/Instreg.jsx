import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Instreg = () => {
  const [age, setAge] = useState('');
  const [formData, setFormData] = useState({
    f_name: '',
    l_name: '',
    mobile: '',
    email: '',
    dob: '',
    age: '',
    uname: '',
    pass: '',
    experience: '',
    education: '',
    address: '',
    gender: ''
  });

  const navigate = useNavigate();

  const handleDobChange = (event) => {
    const dob = new Date(event.target.value);
    const today = new Date();
    let calculatedAge = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
      calculatedAge--;
    }
    setAge(calculatedAge.toString());
    setFormData({ ...formData, dob: event.target.value, age: calculatedAge.toString() });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/learners-academy/Instinfo', { state: { formData } });
  };

  const formFields = [
    { id: 'f_name', name: 'f_name', type: 'text', placeholder: 'First Name', required: true },
    { id: 'l_name', name: 'l_name', type: 'text', placeholder: 'Last Name', required: true },
    { id: 'mobile', name: 'mobile', type: 'text', placeholder: 'Mobile', required: true },
    { id: 'email', name: 'email', type: 'email', placeholder: 'Email Address', required: true },
    { id: 'dob', name: 'dob', type: 'date', placeholder: 'Date of Birth', required: true },
    { id: 'age', name: 'age', type: 'number', placeholder: 'Age', required: true, readOnly: true },
    { id: 'uname', name: 'uname', type: 'text', placeholder: 'Username', required: true },
    { id: 'pass', name: 'pass', type: 'password', placeholder: 'Password', required: true },
    { id: 'experience', name: 'experience', type: 'text', placeholder: 'Experience', required: true },
    { id: 'education', name: 'education', type: 'text', placeholder: 'Education', required: true },
    { id: 'address', name: 'address', type: 'text', placeholder: 'Address', required: true }
  ];

  return (
    <div><br />
  <h1 className='text-st text-center text-primary'>Student Registration</h1>
    <div className="container mt-5 py-2">
       <div className="row justify-content-center">
        <div className="col-md-4 d-flex align-items-left justify-content-left animated-from-right">
          <img src="images/inst.jpg" alt="Left Side Image" className="img-fluid" />
        </div>
        <div className="col-md-8 animated-from-left">
          <div className="card">
            <div className="card-header">Instructor Registration</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  {formFields.map((field, index) => (
                    <div className="col-md-6 mb-3" key={index}>
                      <div className="form-group">
                        <input
                          type={field.type}
                          className="form-control"
                          id={field.id}
                          name={field.name}
                          placeholder={field.placeholder}
                          onChange={field.name === 'dob' ? handleDobChange : handleChange}
                          required={field.required}
                          readOnly={field.readOnly || false}
                          value={field.name === 'age' ? age : formData[field.name]}
                        />
                      </div>
                    </div>
                  ))}
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <select
                        className="form-control"
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                      >
                        <option value="no">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
    </div>
  );
};

export default Instreg;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Stdreg = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    dob: '',
    age: '',
    uname: '',
    pass: '',
    address: '',
    college: '',
    education: '',
    yop: '',
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
    setFormData({ ...formData, dob: event.target.value, age: calculatedAge });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('User Input:', formData);
    navigate('/learners-academy/Stdinfo', { state: { formData } });
  };

  const formFields = [
    { id: 'name', name: 'name', type: 'text', placeholder: 'Name', required: true },
    { id: 'mobile', name: 'mobile', type: 'tel', placeholder: 'Mobile', required: true },
    { id: 'email', name: 'email', type: 'email', placeholder: 'Email Address', required: true },
    { id: 'dob', name: 'dob', type: 'date', placeholder: '', required: true, onChange: handleDobChange },
    { id: 'age', name: 'age', type: 'number', placeholder: 'Age', value: formData.age, readOnly: true, required: true },
    { id: 'uname', name: 'uname', type: 'text', placeholder: 'Username', required: true },
    { id: 'pass', name: 'pass', type: 'password', placeholder: 'Password', required: true },
    { id: 'address', name: 'address', type: 'text', placeholder: 'Address', required: true },
    { id: 'college', name: 'college', type: 'text', placeholder: 'College', required: true },
    { id: 'education', name: 'education', type: 'text', placeholder: 'Education', required: true },
    { id: 'yop', name: 'yop', type: 'text', placeholder: 'Year Of Pass', required: true }
  ];

  return (
  <div><br />
  <h1 className='text-st text-center text-primary'>Student Registration</h1>
    <div className="container mt-5 my-4 py-3">
      <div className="row justify-content-center">
        <div className="col-md-4 d-flex align-items-left justify-content-left animated-from-right">
          <img src="images/std.jpg" alt="Left Side Image" className="img-fluid" />
        </div>

        <div className="col-md-8 col-lg-7 animated-from-left">
          <div className="card">
            <div className="card-header">
              Student Registration
            </div>
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
                          value={field.name === 'age' ? formData.age : formData[field.name]}
                          onChange={field.onChange || handleChange}
                          required={field.required}
                          readOnly={field.readOnly || false}
                        />
                      </div>
                    </div>
                  ))}
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <select className="form-control" id="gender" name="gender" onChange={handleChange} required>
                        <option value="">Select Gender</option>
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
    </div>
    </div>
  );
};

export default Stdreg;

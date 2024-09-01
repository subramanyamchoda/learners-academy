import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="container-fluid mt-2 py-2">
      <br />
      <h1 className="text-primary text-center animated-from-top text-bold text-st1">Registration</h1>
      <div className="row align-items-center justify-content-center imga">
        
        <div className="col-12 col-md-6 text-center mb-3 mb-md-0 mt-3 animated-from-right">
          <img
            src="images/std.jpg"
            className="mx-auto d-block mt-4 img-fluid rounded"
            alt="Student Registration"
            style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px' }}
          />
          <br />
          <Link to="/learners-academy/Stdreg" className="btn btn-primary mt-3 btn-lg slide-in-top">Student Registration</Link>
        </div>
        
        <div className="col-12 col-md-6 text-center mt-3 animated-from-left">
          <img
            src="images/inst.jpg"
            className="mx-auto d-block mt-4 img-fluid rounded"
            alt="Instructor Registration"
            style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px' }}
          />
          <br />
          <Link to="/learners-academy/Insterg" className="btn btn-primary mt-3 btn-lg slide-in-top">Instructor Registration</Link>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Register;

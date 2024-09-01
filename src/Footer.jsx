import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-center text-lg-start text-white fixed-footer bg-dark" id="footer">
            <div className="p-4 pb-4">
                <section>
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Learners Academy</h6>
                            <p>A great Place To Learn Through the Online!<br /><br /> Join us today and start your learning journey!</p>
                        </div>
                        <hr className="w-100 clearfix d-md-none" />
                        <div className="col-md-1 col-lg-1 col-xl-1 mx-auto mt-1">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Links</h6>
                            
                            <p><Link to="/home" className="text-white">Home</Link></p>
                            <p> <Link to="/About" className="text-white">About</Link></p>
                            <p> <Link to="/Login" className="text-white">Login</Link></p>
                            
                        </div>
                        <hr className="w-100 clearfix d-md-none" />
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p><i className="fas fa-phone mr-3"></i> + 91 891938949</p>
                            <p><i className="fas fa-envelope mr-3"></i>LearnersAcadamy@gmail.com</p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>
                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="#!" role="button"><i className="fab fa-facebook-f fa-beat"></i></a>
                            <a className="btn btn-primary btn-floating m-1 fa=beat" style={{ backgroundColor: '#55acee' }} href="#!" role="button"><i className="fab fa-twitter fa-beat"></i></a>
                            <a className="btn btn-primary btn-floating m-1 " style={{ backgroundColor: '#dd4b39' }} href="#!" role="button"><i className="fab fa-google fa-beat "></i></a>
                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="#!" role="button"><i className="fab fa-instagram fa-beat" ></i></a>
                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="#!" role="button"><i className="fab fa-linkedin-in fa-beat"></i></a>
                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#333333' }} href="#!" role="button"><i className="fab fa-github fa-beat"></i></a>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
}

export default Footer;

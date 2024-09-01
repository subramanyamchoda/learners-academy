import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Home = () => {
    const features = [
        {
            id: 1,
            title: "Free Online Courses",
            info: "Access a variety of high-quality courses for free.",
            img: "images/education.png"  // Corrected image path
        },
        {
            id: 2,
            title: "Expert Instructors",
            info: "Learn from experienced professionals who are experts in their fields.",
            img: "images/instructor.png"  // Corrected image path
        },
        {
            id: 3,
            title: "Lifetime Access",
            info: "Enjoy lifetime access to all course materials and updates.",
            img: "images/lifetime.png"  // Corrected image path
        }
    ];

    return (
        <div className="container-fluid">
            {/* Header Section */}
            <div className="my-4 py-3">
                <div className="row justify-content-center text-center align-items-center">
                    <div className="col-md-6">
                        <div className="matter">
                            <h1 className="fw-bold animated bounceInDown display-4 display-md-3 text-st1">
                                Learners <br /> Academy
                            </h1>
                            <h2 className="additional-text animated fadeIn fs-4 fs-md-3">
                                A Great Place To Learn Online!
                            </h2>
                            <h4 className="additional-text animated fadeIn fs-5 fs-md-4">
                                Join us today and start your learning journey!
                            </h4>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="images/1.svg" className="animated bounce img-fluid" alt="Learning Illustration" />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="row">
                {features.map((feature) => (
                    <div key={feature.id} className="col-lg-4 col-md-6 my-3 text-center animated-from-top">
                        <img src={feature.img} alt={feature.title} className="img-fluid fa-beat mb-3" style={{ maxWidth: '80px' }} />
                        <h3 className="animated fadeIn text-st">{feature.title}</h3>
                        <h5>{feature.info}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;

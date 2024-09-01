import React from 'react';

const About = () => {
  const about = [
    "Education is the most powerful weapon which you can use to change the world. The beautiful thing about learning is that no one can take it away from you. Education makes a people easy to lead but difficult to drive: easy to govern, but impossible to enslave.",
    "Discover a world of learning at your fingertips with our online courses. Whether you're aiming to boost your skills for work, explore new hobbies, or simply expand your knowledge, we've got you covered. Our courses offer the freedom to learn at your own pace, wherever you are.",
    "Learning experiences are like journeys. A great place to learn through the online. Join us today and start your learning journey. The roots of education are bitter, but the fruit is sweet. Education is not the filling of a pail, but the lighting of a fire.",
    "Led by experienced instructors, our interactive lessons make learning engaging and enjoyable. From business and technology to arts and humanities, there's a course for everyone. Start your learning journey today and open the door to endless possibilities.",
  ];

  const images = [
    { 
      id: 1,
      className: "img-fluid rounded w-100 wow zoomIn",
      img: "mages/about2.jpeg",
      alt: "Educational journey illustration"
    },
    { 
      id: 2,
      className: "img-fluid rounded w-75 wow zoomIn",
      img: "images/about1.jpg",
      alt: "Online course platform"
    },
    { 
      id: 3,
      className: "img-fluid rounded w-75 wow zoomIn",
      img: "images/about4.png",
      alt: "Interactive learning"
    },
    { 
      id: 4,
      className: "img-fluid rounded w-100 wow zoomIn",
      img: "images/about3.jpeg",
      alt: "Learning community"
    }
  ];

  return (
    <div className='mt-2 py-3'>
      <h1 className="text-primary text-center animated-from-top text-bold text-st1">About Us</h1>
      <div className="py-1 mt-3 mx-3">
        <div className="row g-1 align-items-center">
          <div className="col-lg-6 text-center animated-from-right">
            <h1 className="mb-4 text-st">Welcome to Learners Academy</h1>
            {about.map((data, index) => (
              <p key={index} className="mb-4">
                <i className="fa-solid fa-arrow-right fa-beat fa-lg text-primary"></i>
                <em> {data}</em>
              </p>
            ))}
          </div>
          {/* Images */}
          <div className="col-lg-6 animated-from-left">
            <div className="row g-3">
              {images.map((img) => (
                <div key={img.id} className="col-6">
                  <img
                    className={img.className}
                    src={img.img}
                    alt={img.alt}
                  
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

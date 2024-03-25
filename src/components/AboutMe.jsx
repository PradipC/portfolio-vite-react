// AboutMe.js
import React from 'react';
import './style/AboutMe.css'; 

const AboutMe = () => {
  return (
    <section className="page-container" >
      <h2>About Me</h2>
      <div className="content">
      <div>
      <div className="profile-image">
        <img src="/src/assets/student.png" alt="Avatar"    />
        </div>
        <p>
          My name is John Smith. I am a dedicated and enthusiastic individual with a strong passion for technology and coding. 
          Currently, I am pursuing my studies in the 10th grade at XYZ School, 
          where I excel academically while also actively participating in extracurricular activities.
        </p>
        <p>
          Technology has always fascinated me, and I enjoy delving into the world of programming 
          to explore its endless possibilities. In my free time, 
          I immerse myself in personal coding projects, constantly seeking 
          to enhance my skills and broaden my knowledge. Alongside my academic pursuits,
          I am an avid sports enthusiast and enjoy staying active.
          I value spending quality time with my family and friends, fostering strong relationships 
          and creating cherished memories.
        </p>
      </div>
      </div>
    </section>
  );
};

export default AboutMe;

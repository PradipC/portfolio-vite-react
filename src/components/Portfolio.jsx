// Portfolio.js
import React from 'react';
import './style/Portfolio.css';


const projects = [
  { name: 'Calculator', tech: 'JavaScript', githubLink: 'https://github.com/Calculator' , imageLink: '/src/assets/calculator_project1.jpg'  },
  { name: 'Chess', tech: 'Python', githubLink: 'https://github.com/Chess' ,imageLink: '/src/assets/chess_project2.webp'  },
  { name: 'Weather', tech: 'React', githubLink: 'https://github.com/Weather', imageLink: '/src/assets/weather_project3.avif'  },
  { name: 'Roll Dice', tech: 'Angular', githubLink: 'https://github.com/RollDice', imageLink: '/src/assets/roll_dice_project4.jpg'  },
  { name: 'Super Mario', tech: 'Node', githubLink: 'https://github.com/SuperMario', imageLink: '/src/assets/mario_project5.jpg'  },
  { name: 'Temperature Conversion', tech: 'JavaScript', githubLink: 'https://github.com/TemperatureConversion', imageLink: '/src/assets/tempConversion_project6.jpeg'  },
  
];


const Portfolio = () => {
  return (
    <section className="page-container" >
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.imageLink}  width="300" height="200" alt={project.name} />
            <div className="overlay">
              <div className="project-details">
                <h3>{project.name}</h3>
                <p>Tech: {project.tech}</p>
                <p>
                  {project.githubLink}         
                </p> 
                 </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
import React from 'react';
import './Home.css';
import colinhwang from '../Assets/colinhwang.jpg';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaGitAlt } from 'react-icons/fa';
import { DiJavascript1, DiPython, DiJava, DiReact, DiMongodb, DiMysql, DiVisualstudio } from 'react-icons/di';
import { SiC, SiCsharp, SiCplusplus, SiUnity, SiNextdotjs, SiLinux, SiVim, SiMicrosoftoffice, SiMysql, SiMongodb, SiRedis } from 'react-icons/si';
import ExperienceCarousel from '../Components/ExperienceCarousel';
import ProjectCarousel from '../Components/ProjectCarousel';
import TechStack from '../Components/TechStack';


function Home() {
  const experiences = [
    {
        company: 'Company A',
        jobTitle: 'Software Engineer',
        duration: 'June 2020 - June 2021',
        techStack: ['React', 'Node.js', 'PostgreSQL'],
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      company: 'Company B',
      jobTitle: 'Software Engineer',
      duration: 'June 2020 - June 2021',
      techStack: ['React', 'Node.js', 'PostgreSQL'],
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      company: 'Company C',
      jobTitle: 'Software Engineer',
      duration: 'June 2020 - June 2021',
      techStack: ['React', 'Node.js', 'PostgreSQL'],
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      company: 'Company D',
      jobTitle: 'Software Engineer',
      duration: 'June 2020 - June 2021',
      techStack: ['React', 'Node.js', 'PostgreSQL'],
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      company: 'Company E',
      jobTitle: 'Software Engineer',
      duration: 'June 2020 - June 2021',
      techStack: ['React', 'Node.js', 'PostgreSQL'],
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
  ];

  const projects = [
    {
        name: 'Project A',
        tags: ['React', 'Node.js', 'PostgreSQL'],
        summary: 'An application for managing projects, tasks, and teams.',
        githubUrl: 'https://github.com/colinhwang/projectA'
    },
    {
        name: 'Project B',
        tags: ['Python', 'Django', 'MySQL'],
        summary: 'A web application for tracking inventory and sales.',
        githubUrl: 'https://github.com/colinhwang/projectB'
    },
    {
        name: 'Project C',
        tags: ['Java', 'Spring Boot', 'MongoDB'],
        summary: 'A system for managing university course registration.',
        githubUrl: 'https://github.com/colinhwang/projectC'
    },
    {
        name: 'Project D',
        tags: ['JavaScript', 'Express', 'MongoDB'],
        summary: 'A blogging platform for sharing and discovering new recipes.',
        githubUrl: 'https://github.com/colinhwang/projectD'
    },
    {
        name: 'Project E',
        tags: ['React', 'Firebase'],
        summary: 'A real-time chat application with user authentication.',
        githubUrl: 'https://github.com/colinhwang/projectE'
    },
];

const languages = [
  {icon: DiJavascript1, name: 'JavaScript'},
  {icon: DiPython, name: 'Python'},
  {icon: DiJava, name: 'Java'},
  {icon: SiCsharp, name: 'C#'},
  {icon: SiCplusplus, name: 'C++'},
  {icon: SiC, name: 'C'},
];

const softwareAndOs = [
  {icon: FaGitAlt, name: 'Git'},
  {icon: SiLinux, name: 'Linux'},
  {icon: SiVim, name: 'Vim'},
  {icon: DiVisualstudio, name: 'Visual Studio'},
  {icon: SiMicrosoftoffice, name: 'Microsoft Office'},
];

const additional = [
  {icon: DiReact, name: 'React'},
  {icon: DiMongodb, name: 'MongoDB'},
  {icon: DiMysql, name: 'MySQL'},
  {icon: SiNextdotjs, name: 'Next.js'},
  {icon: SiUnity, name: 'Unity'},
  {icon: SiMysql, name: 'MySQL'},
  {icon: SiRedis, name: 'Redis'},
];

  return (
      <div className="home">
          <section id="about" className="home-section about-section">
              <h1>ABOUT ME</h1>
              <div className="about-content">
                  <div className="about-text">
                      <h2>Colin Hwang</h2>
                      <div className="social-icons">
                          <a href="#"><FaGithub size={22}/></a>
                          <a href="#"><FaLinkedin size={22}/></a>
                          <a href="#"><FaInstagram size={22}/></a>
                          <a href="#"><FaFacebook size={22}/></a>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
                  </div>
                  <div className="about-image">
                      <img src={colinhwang} alt="Picture of Colin Hwang"/>
                  </div>
              </div>
          </section>

          <section id="experience" className="home-section experience-section">
                <h1>EXPERIENCE</h1>
                <ExperienceCarousel experiences={experiences} />
          </section>

          <section id="projects" className="home-section">
              <h1>PROJECTS</h1>
              <ProjectCarousel projects={projects} />
          </section>

          
          <section id="tech-stack" className="home-section">
              <h1>TECH STACK</h1>
              <TechStack title="Languages" techs={languages} />
              <TechStack title="Software and OS" techs={softwareAndOs} />
              <TechStack title="Additional" techs={additional} />
          </section>
      </div>
  );
}

export default Home;

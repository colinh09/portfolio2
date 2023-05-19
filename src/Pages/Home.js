import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaGitAlt } from 'react-icons/fa';
import { DiJavascript1, DiPython, DiJava, DiReact, DiMongodb, DiMysql, DiVisualstudio } from 'react-icons/di';
import { SiC, SiCsharp, SiCplusplus, SiUnity, SiNextdotjs, SiLinux, SiVim, SiMicrosoftoffice, SiMysql, SiMongodb, SiRedis } from 'react-icons/si';
import { FiChevronsRight } from 'react-icons/fi';
import { AiOutlineFilePdf } from 'react-icons/ai';
import ExperienceCarousel from '../Components/ExperienceCarousel';
import ProjectCarousel from '../Components/ProjectCarousel';
import TechStack from '../Components/TechStack';
import { IoIosArrowDropupCircle, IoIosArrowDropdownCircle } from 'react-icons/io';

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

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const techStackRef = useRef(null);

  const sectionRefs = [aboutRef, experienceRef, projectsRef, techStackRef];

  const [currentSectionIndex, setCurrentSectionIndex] = React.useState(0);

  const scrollUp = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      if(sectionRefs[currentSectionIndex - 1].current) {
          sectionRefs[currentSectionIndex - 1].current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollDown = () => {
    if (currentSectionIndex < sectionRefs.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      if(sectionRefs[currentSectionIndex + 1].current) {
          sectionRefs[currentSectionIndex + 1].current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };


  const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'tech-stack', label: 'Tech Stack' },
  ];

  return (
      <div className="home">
        <section ref={aboutRef} id="about" className="home-section about-section">
          <h1>ABOUT ME</h1>
          <div className="about-content">
              <div className="about-text">
                <h2>Colin Hwang</h2>
                <div className="social-icons">
                  <a href="https://github.com/colinh09" target="_blank"><FaGithub size={22}/></a>
                  <a href="https://www.linkedin.com/in/colin-hwang-dev/" target="_blank"><FaLinkedin size={22}/></a>
                  <a href="https://www.instagram.com/colin_hwang_/" target="_blank"><FaInstagram size={22}/></a>
                  <a href="https://www.facebook.com/colin.hwang.9/" target="_blank"><FaFacebook size={22}/></a>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero
                </p>
              </div>
              <div className="about-image">
                  <img src='/colinhwang.jpg' alt="Picture of Colin Hwang"/>
              </div>
            </div>
          </section>

          <section ref={experienceRef} id="experience" className="home-section experience-section">
            <h1>EXPERIENCE</h1>
            <div className="learn-more">
              <a href="/Resume_ColinHwang.pdf" target="_blank" rel="noopener noreferrer">
                View my Resume 
                <AiOutlineFilePdf size={20} className="learn-more-icon"/>
              </a>
            </div>
            <ExperienceCarousel experiences={experiences} />
          </section>


          <section ref={projectsRef} id="projects" className="home-section">
            <h1>PROJECTS</h1>
            <div className="learn-more">
                <Link to="/projects">
                  A more in-depth view into my projects 
                  <FiChevronsRight size={20} className="learn-more-icon"/>
                </Link>
            </div>
            <ProjectCarousel projects={projects} />
          </section>

          
        <section ref={techStackRef} id="tech-stack" className="home-section">
          <h1>TECH STACK</h1>
          <TechStack title="Languages" techs={languages} />
          <TechStack title="Software and OS" techs={softwareAndOs} />
          <TechStack title="Additional" techs={additional} />
        </section>

        <div className="scroll-icon">
          <IoIosArrowDropupCircle size={60} onClick={scrollUp} />
          <IoIosArrowDropdownCircle size={60} onClick={scrollDown} />
        </div>
      </div>
  );
}

export default Home;

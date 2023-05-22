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
import experiences from '../Json/experiences.json';
import projects from '../Json/projects.json';

function Home() {
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
                  <a href="https://github.com/colinh09" target="_blank"><FaGithub className="icon"/></a>
                  <a href="https://www.linkedin.com/in/colin-hwang-dev/" target="_blank"><FaLinkedin className="icon"/></a>
                  <a href="https://www.instagram.com/colin_hwang_/" target="_blank"><FaInstagram className="icon"/></a>
                  <a href="https://www.facebook.com/colin.hwang.9/" target="_blank"><FaFacebook className="icon"/></a>
                </div>
                <p>I'm a student and software/machine learning engineer based in the NYC area, currently pursuing both a B.Eng. and M.Eng. in electrical engineering at The Cooper Union. My primary interests lie in machine learning and database management.</p>
                <p>In the upcoming months, I will be joining Georgetown University as an undergraduate researcher while working on my master's thesis, which will focus on low-resource deep reinforcement learning.</p>
                <p>Below, you will find an overview of my experience, projects, and the technology I use. In the projects page, you can find a more comprehensive insight into certain projects that I have written documentation for. You can also find updates on projects that I am currently working on. If you wish to contact me, I can be reached at colin.hwang@cooper.edu.</p>
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
                  A more in-depth view into some of my projects 
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
          <IoIosArrowDropupCircle size={60} onClick={scrollUp} className="arrow" />
          <IoIosArrowDropdownCircle size={60} onClick={scrollDown} className="arrow"/>
        </div>
      </div>
  );
}

export default Home;

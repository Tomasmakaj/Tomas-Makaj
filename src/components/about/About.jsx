import React from 'react'
import './about.css'
import Tommy from '../../assets/Tommy.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Tommy} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Flatiron School</h5>
              <small>Software Engineer</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5</small>
            </article>
          </div>

          <p>
          I am a full stack web developer with a passion for problem solving. After graduating from Fordham University with a B.S in Organizational Leadership, I worked in the construction field as a Project Manager until I discovered my love for programming. 
          During my time at Fordham, my leadership program taught me skills like fostering teamwork, communicating effectively, and motivating one another. Project managing fast paced construction jobs allowed me to think outside the box especially in the case of problem solving. I am currently open for new opportunities in which I can utilize my web development skills and my passion for creativity.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
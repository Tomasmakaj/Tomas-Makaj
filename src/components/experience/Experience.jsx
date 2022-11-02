import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon' /> */}
              <div>
                {/* <h4>JavaScript</h4> */}
                <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />

                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon' /> */}
              <div>
                {/* <h4>React</h4> */}
                <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          

                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon' /> */}
              <div>
                {/* <h4>Redux</h4> */}
                <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
          
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon' /> */}
              <div>
                {/* <h4>HTML</h4> */}
                <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
          
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon' /> */}
              <div>
                {/* <h4>CSS</h4> */}
                <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
          
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon' /> */}
              <div>
                {/* <h4>Bootstrap</h4> */}
                <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" />
          
                {/* <small className='text-light'>Basic</small> */}
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon' /> */}
              <div>
                {/* <h4>Ruby</h4> */}
                <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg" />
          
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon' /> */}
              <div>
                {/* <h4>Ruby On Rails</h4> */}
                <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" />
          
          
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon' /> */}
              <div>
                {/* <h4>Python</h4> */}
                <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
          
                {/* <small className='text-light'>Basic</small> */}
              </div>
            </article>
            <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon' /> */}
              <div>
                {/* <h4>Django</h4> */}
                <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
          
                {/* <small className='text-light'>Basic</small> */}
              </div> 
            </article>
            <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon' /> */}
              <div>
                {/* <h4>PostgreSQL</h4> */}
                <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
          
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon' /> */}
              <div>
                {/* <h4>SQLite</h4> */}
                <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-plain.svg" />
          
          
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
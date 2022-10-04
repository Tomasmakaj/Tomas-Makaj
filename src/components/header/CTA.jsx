import React from 'react'
// import CV from '../../assets/cv.pdf'
import Resume from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href= {Resume} target = "_blank " className='btn'>Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
import React from 'react'
import Resume from '../../assets/M.Smitte Resume 2022.pdf'

const CTA = () => {
  return (
      <div className='cta'>
          <a href={Resume} download className='btn'>Download Resume</a>
          <a href="#contact" className='btn btn-primary'>Contact Me!</a>
    </div>
  )
}

export default CTA
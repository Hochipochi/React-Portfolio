import React from 'react'
import Resume from '../../assets/M.Smitte Resume 2023.pdf'

const CTA = () => {
  return (
      <div className='cta'>
          <a href={Resume} download className='btn btn-primary'>Download Resume</a>
          <a href="#contact" className='btn btn-primary'>Contact Me!</a>
    </div>
  )
}

export default CTA
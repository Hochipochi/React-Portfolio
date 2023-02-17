import React from 'react'
import './footer.css'
import { AiOutlineFolderOpen } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Michael Smitte</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Experience</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/' target='_blank'><AiOutlineFolderOpen /> My Linkedin</a>
        <a href='https://github.com/Hochipochi' target='_blank'><AiOutlineFolderOpen />My Github</a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Michael Smitte Portfolio</small>
      </div>
    </footer>
  )
}

export default Footer
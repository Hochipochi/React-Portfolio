import React from 'react'
import './about.css'
import ME from '../../assets/duopic.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>My Fullstack Experience</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects / Portfolio</h5>
              <small>List of my Accomplishments</small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quibusdam necessitatibus ducimus, perspiciatis similique cupiditate officiis vero magnam voluptate recusandae voluptatum illum esse omnis soluta culpa debitis? Fugit, eligendi iure!
          </p>
        </div>

        <a href="#contact" className='btn btn-primary'>Contact Me</a>
      </div>


    </section>
  )
}

export default About
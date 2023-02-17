import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='Brews n Chews' />
          </div>
          <h3>Brews N' Chews</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/mdh1080/Brews-and-Chews' className='btn btn-primary' target='_blank'>Github</a>
            <a href='https://mdh1080.github.io/Brews-and-Chews/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='RNG Checker' />
          </div>
          <h3>RNG Checker</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Hochipochi/RNG-Checker' className='btn btn-primary' target='_blank'>Github</a>
            <a href='https://hochipochi.github.io/RNG-Checker/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
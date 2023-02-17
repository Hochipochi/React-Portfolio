import React from 'react'
import './contact.css'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMarkEmailUnread className='contact__option-icon' />
            <h4>Email</h4>
            <h5>Smittemichael@yahoo.com</h5>
            <a hrev='mailto:smittemichael@yahoo.com' target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message Here' rows="5" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact
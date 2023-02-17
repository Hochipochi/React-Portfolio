import React from 'react'
import './contact.css'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rxviodg', 'template_0nkanvs', form.current, '5sf1MlgBOMaoGhj3F')

    e.target.reset()
  };

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
        <form ref={form} onSubmit={sendEmail}>
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
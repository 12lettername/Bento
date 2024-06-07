import React from 'react'
import './Contact.css';

function func1() {
  alert ("Thank you for your feedback");
}

export default function Contact() {
  return (
   
    <div className='container_body'>
      <div className='container_contact'>
        <form onSubmit={func1}>
        <h1>Give your Feedback</h1>
          <div className='id'>
              <input required type='text' placeholder='Full Name' />
              <i className='far fa-user'></i>
          </div>
          <div className='id'>
              <input required type='email' placeholder='Email Address' />
              <i className='far fa-envelope'></i>
          </div>
              <textarea cols="15" rows="5" placeholder='Enter your feedback' />
              <button className='button-28_contact'>Send</button>
        </form>
      </div>
      </div>
     
  )
}

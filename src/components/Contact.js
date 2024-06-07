import React from 'react'
import './Contact.css';

function func1() {
  alert ("Thank you for your feedback");
}

export default function Contact() {
  return (
   
    <div className='container_body'>
      <div className='contacts'>

        
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
        <div className='container_details'>
          <div className='box'>
            <div className='icon'><i class="fa-solid fa-location-dot"></i></div>
            <div className='text'>
              <h3>Address</h3>
              <p>H-34, Block 3,<br /> Tilak Nagar, New Delhi,<br /> 110029</p>  
            </div>  
          </div>
          <div className='box'>
            <div className='icon'><i class="fa-solid fa-envelope"></i></div>
            <div className='text'>
              <h3>Email</h3>
              <p>aryanneogi@gmail.com</p>  
            </div>  
          </div> 
          <div className='box'>
            <div className='icon'><i class="fa-solid fa-phone"></i></div>
            <div className='text'>
              <h3>Phone</h3>
              <p>9599720436</p>  
            </div>  
          </div>  
        </div>
      
    </div>
      </div>
     
  )
}

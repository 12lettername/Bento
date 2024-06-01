import React from 'react'
import './Buy.css'
import { Link } from 'react-router-dom'


function myFunction() {

  document.getElementById("demo").innerHTML = "The value of the formtarget attribute was changed from '_blank' to '_self'.";
}

export default function Buy(props) {
  return (
    <div className='buy'>
      <div className='buy_container'>
      <div className='buy_content'>
        <Link to="/order" >
              <button className='button-28'><i class="fa-solid fa-arrow-left"></i> GO BACK</button>
        </Link>
        <form>
          <div>
            <label className='buy_label'>Name</label>
            <br />
            <input className='buy_input' maxlength="35" required type="text"  />
          </div>
          <div >
            <label className='buy_label'>Address</label>
            <br />
            <input className='buy_input' maxlength="35" required type="text"  />
          </div>
          <button type='submit'className='button-28' onClick={myFunction}>Try it</button>

          </form>
          <p id="demo"></p>
      </div>
      </div>
    </div>
  )
}

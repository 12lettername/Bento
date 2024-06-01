import React from 'react';
import '../App.css';
import {Button} from './Button';
import './Main.css'

function main() {
    return (
        <div className='hero-container'>
          <video src='/videos/japnese_cuisine.mp4' autoPlay loop muted />
          <h1>Irasshaimase!</h1>
          <p>Welcome to Bénto!</p>
          <div className='hero-btns'>
            <Button
            page='order'
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              ORDER NOW
            </Button>
            <Button
            page='menu'
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          SEE OUR MENU <i class="fas fa-regular fa-utensils"/>
        </Button>
          </div>
        </div>
      );
}

export default main

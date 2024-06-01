import React from 'react'
import './About.css'
import 'animate.css';



function About() {
  return (
    <div className='about'>
        <div className='content'>
            <h1 className='header'>Konnichiwa!</h1>
            <p className='welcome'>
            At Bénto, we invite you to embark on a culinary journey through the rich flavors and traditions of Japan.
            <br />
            Our chefs craft each dish with passion and precision, using the freshest ingredients to bring you an authentic taste of Japanese cuisine.
            <br />
            <br />
            Whether you're here to savor our signature sushi rolls or indulge in a bowl of comforting ramen,we strive to create a dining experience that delights your senses.
            <br />
            <br />
            We look forward to welcoming you and sharing the artistry and hospitality that define Japanese dining. Thank you for choosing Bénto—your gateway to a memorable culinary adventure.
            </p>
        </div>
        <div className='pic'>
          
            <img src='/images/sushi_roll.png'  alt='sushi roll' width="350px"/>
          
      
            <img src='/images/food_img.png'  alt='chef' width="350px" />
        </div>
    </div>
  )
}

export default About

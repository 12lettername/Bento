import React from 'react';
import './Card.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our delicacies!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/sushi.jpg'
              text='Vinegared rice topped or rolled with various ingredients such as raw fish, seafood, vegetables, and sometimes tropical fruits'
              name='Sushi'
              path='/order'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Udon.jpg'
              text='Thick, chewy wheat noodles served in a mild, savory broth'
              name='Udon'
              path='/order'
            />
            <CardItem
              src='images/tempura.jpg'
              text='Seafood, vegetables, or even meat that is lightly battered and deep-fried to a crisp perfection'
              name='Tempura'
              path='/order'
              />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/gyoza.jpg'
              text='Japanese-style dumplings filled with ground meat and vegetables, usually pan-fried to create a crispy bottom and steamed top'
              name='Gyoza'
              path='/contact-us'
            />
            <CardItem
              src='images/miso.jpg'
              text='A traditional soup made from dashi (broth), miso paste, and various ingredients such as tofu, seaweed, and green onions'
              name='Miso Soup'
              path='/order'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

import React from 'react'
import {Link} from 'react-router-dom';


function CardItem(props) {
    return (
      <>
        <li className='cards__item'>
          <Link className='cards__item__link' to={props.path}>
            <figure className='cards__item__pic-wrap'>
              <img
                className='cards__item__img'
                alt='Travel'
                src={props.src}
              />
            </figure>
            <div className='cards__item__info'>
              <div className='cards__item__heading'>
                <img src='/images/decor.png' alt='decoration' />
                <h3 className='cards_item_name'>{props.name}</h3>
                <img src='/images/decor.png' alt='decoration' />
              </div>
                <h5 className='cards__item__text'>{props.text}</h5>
            </div>
          </Link>
        </li>
      </>
    );
  }

export default CardItem

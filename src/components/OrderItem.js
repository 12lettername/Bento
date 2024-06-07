import React from 'react'
import { Link } from 'react-router-dom'

function OrderItem(props) {
  return (
    <div className='order_item'>
        <div className='pic_order'>
          <img  src={props.src}
           />
        </div>
        <div className='content_order'>
          <div className='content_order_name'>
            <img src='/images/decor.png' alt='decoration' />
            <h3>{props.name}</h3>
            <img src='/images/decor.png' alt='decoration' />
          </div>
          <div className='order_price'>
            <h5 className='price'><i class="fa-solid fa-indian-rupee-sign fa-sm"></i>{props.price}</h5>
          </div>
          <Link to={props.path} >
            <button className='button-28_order'>ORDER <i class="fa-solid fa-arrow-right"></i></button>
          </Link>
        </div>
    </div>
  )
}

export default OrderItem

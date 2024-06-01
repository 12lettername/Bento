import React from 'react'
import './Order.css'
import OrderItem from './OrderItem'

function Order() {
  return (
    <div className='orders'>
      <h1>Check out our delicacies!</h1>
        <div className='container'>
            <OrderItem 
            src="images/sushi.jpg"
            name="Sushi"
            price="300"
            path="/sushi"
            />
            <OrderItem 
            src="images/Udon.jpg" 
            name="Udon"
            price="250"
            path="/"
            />
            <OrderItem 
            src="images/tempura.jpg" 
            name="Tempura"
            price="280"
            path="/"
            />
            <OrderItem 
            src="images/gyoza.jpg" 
            name="Gyoza"
            price="400"
            path="/"
            />
            <OrderItem 
            src="images/miso.jpg" 
            name="Miso Soup"
            price="350"
            path="/"
             />
        </div>
    </div>
  )
}

export default Order

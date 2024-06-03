import React from 'react'
import './Order.css'
import OrderItem from './OrderItem'

function Order() {
  return (
    <div className='orders'>
        <div className='container'>
            <OrderItem 
            src="images/sushi.jpg"
            name="Sushi"
            price="300"
            path="/buy/Sushi"
            />
            <OrderItem 
            src="images/Udon.jpg" 
            name="Udon"
            price="250"
            path="/buy/Udon"
            />
            <OrderItem 
            src="images/tempura.jpg" 
            name="Tempura"
            price="280"
            path="/buy/Tempura"
            />
            <OrderItem 
            src="images/gyoza.jpg" 
            name="Gyoza"
            price="400"
            path="/buy/Gyoza"
            />
            <OrderItem 
            src="images/miso.jpg" 
            name="Miso Soup"
            price="350"
            path="/buy/MisoSoup"
             />
        </div>
    </div>
  )
}

export default Order

import React from 'react'
import Avatar from '../image/avatar.png'
import Bubble from '../image/bubble.png'
import Bag from '../image/bag.png'

const Confirmation = ()=>{
  return (
    <div className="position-relative">
      <img src={Bubble} alt="Layout Design" className="img-bubble" />
      <img src={Bag} alt="Shopping Bag" className="img-bag"/>

      <div className="message-confirmation">
        <h4>Thank you for shopping</h4>
        <div className="imgbox">
          <img src={Avatar} alt="User Avatar"/>
        </div>
        <p>Please collect your bag at the counter</p>
      </div>

   

    </div>
  )
}


export default Confirmation
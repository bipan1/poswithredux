import React from 'react'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-home">
        <i className="ic-windows"></i>
        <span>Home</span>
      </div>

      <div className="footer-cart">
        <div className="icon">
          <i className="ic-bag "></i>
        </div>
        <div className="item">
          <h6>My Bag</h6>
          <p>0 items</p>
        </div>


        <div className="item">
          <h6>Cost</h6>
          <p>$ 0.00</p>
        </div>

        <div className="ml-auto">
          <button className="btn btn-warning">View</button>
        </div>

      </div>
    </footer>
  )
}


export default Footer
import React from 'react'
import Avatar from '../image/avatar.png'
import Bubble from '../image/bubble.png'
import Product1 from '../image/product1.png'

import Header from '../components/Header'

const Bag = () => {
  return (
    

    <>

    <Header/>

      <div className="position-relative">
      <img src={Bubble} alt="Layout Design" className="img-bubble" />
      <div className="container mt-4 mb-3 d-flex justify-content-between">
        <div className="img-avatar">
          <img src={Avatar} alt="User name" />
        </div>
        <div className="product-total">
          <h6>TOTAL</h6>
          <h4>$300.00</h4>
        </div>
      </div>

     

      <div className="shadow-top"></div>
      <section className="section-scrollable">
        <div className="container">
          <ul className="cartlist">


            <li className="card-cart mt-3">
              <div className="imgbox">
                <img src={Product1} alt="" />
              </div>
              <div className="description">
                <h6>Fur Coats</h6>
                <h5>Black Fur Top Jacket</h5>


                <div className="description-overview">
                  <h4>$200</h4>
                  <h4>M</h4>
                  <div className="radio-color pl-3">
                    <input type="radio" id="orange" name="colorRadio" checked="true" />
                    <label htmlFor="orange" style={{ backgroundColor: 'red' }} ></label>
                  </div>
                </div>

              </div>

              <div className="close">
                <i className="ic-close"></i>
              </div>
            </li>
            <li className="card-cart mt-3">
              <div className="imgbox">
                <img src={Product1} alt="" />
              </div>
              <div className="description">
                <h6>Fur Coats</h6>
                <h5>Black Fur Top Jacket</h5>


                <div className="description-overview">
                  <h4>$200</h4>
                  <h4>M</h4>
                  <div className="radio-color pl-3">
                    <input type="radio" id="orange" name="colorRadio" checked="true" />
                    <label htmlFor="orange" style={{ backgroundColor: 'red' }} ></label>
                  </div>
                </div>

              </div>

              <div className="close">
                <i className="ic-close"></i>
              </div>
            </li>
            <li className="card-cart mt-3">
              <div className="imgbox">
                <img src={Product1} alt="" />
              </div>
              <div className="description">
                <h6>Fur Coats</h6>
                <h5>Black Fur Top Jacket</h5>


                <div className="description-overview">
                  <h4>$200</h4>
                  <h4>M</h4>
                  <div className="radio-color pl-3">
                    <input type="radio" id="orange" name="colorRadio" checked="true" />
                    <label htmlFor="orange" style={{ backgroundColor: 'red' }} ></label>
                  </div>
                </div>

              </div>

              <div className="close">
                <i className="ic-close"></i>
              </div>
            </li>


            <li className="card-cart mt-3">
              <div className="imgbox">
                <img src={Product1} alt="" />
              </div>
              <div className="description">
                <h6>Fur Coats</h6>
                <h5>Black Fur Top Jacket</h5>


                <div className="description-overview">
                  <h4>$200</h4>
                  <h4>M</h4>
                  <div className="radio-color pl-3">
                    <input type="radio" id="orange" name="colorRadio" checked="true" />
                    <label htmlFor="orange" style={{ backgroundColor: 'red' }} ></label>
                  </div>
                </div>

              </div>

              <div className="close">
                <i className="ic-close"></i>
              </div>
            </li>
          
          
          
          </ul>
        </div>
      </section>
      <div className="shadow-bottom"></div>
      <footer className="footer-checkout">
        <button className="btn btn-warning rounded-pill">Back to Home</button>
        <button className="btn btn-primary rounded-pill">Checkout</button>
      </footer>

    </div>
  
  
    </>
  
  )
}


export default Bag
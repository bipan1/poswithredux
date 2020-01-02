import React from 'react'
import HomeAvatar from '../image/home-avatar.png'
import Slider from "react-slick";
import Product1 from '../image/product1.png'
import Product2 from '../image/product2.png'
import Product3 from '../image/product3.png'
import Product4 from '../image/product4.png'
import Product5 from '../image/product5.png'
import ProductNavigation from "../components/ProductNavigation";

import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <main className="home">

      <h6 className="message-home">
        Welcome
     </h6>
      <div className="imgbox">
        <img src={HomeAvatar} alt="User Image" />
      </div>
      <div className="container">

        <div className="row align-items-center">
          <div className="col-10">
            <Slider

              slidesToShow={4}
              swipeToSlide={true}
              focusOnSelect={true}
              arrows={false}
              centerMode={false}
              className="slick-thumb slick-thumb_home"

            >
              <div className="item">
                <ProductNavigation image={Product1} />
              </div>
              <div className="item">
                <ProductNavigation image={Product2} />
              </div>
              <div>
                <ProductNavigation image={Product3} />
              </div>
              <div>
                <ProductNavigation image={Product4} />
              </div>
              <div>
                <ProductNavigation image={Product5} />
              </div>

            </Slider>

          </div>
          <div className="col-2">
            <Link className="btn btn-warning text-white ">View more</Link>
          </div>
        </div>
      </div>

    </main>
  )
}


export default Home
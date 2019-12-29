import React, { Component } from "react";
import Slider from "react-slick";
import Product1 from '../image/product1.png'
import Product2 from '../image/product2.png'
import Product3 from '../image/product3.png'
import Product4 from '../image/product4.png'
import Product5 from '../image/product5.png'
import Bubble from '../image/bubble.png'
import ProductHighLight from '../components/ProductHighLight'
import ProductNavigation from "../components/ProductNavigation";

export default class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {

 
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div className="mt-3 position-relative">
        <img src={Bubble} alt="Layout Design" className="img-bubble"/>
       
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          arrows={false}
        >
          <div className="item">
          <ProductHighLight image={Product1} price="$200.00" url="/home"/>
          </div>
          
          <div className="item">
            <ProductHighLight image={Product2} price="$200.00" url="/home"/>
          </div>

          <div className="item">
            <ProductHighLight image={Product3} price="$200.00" url="/home"/>
          </div>
          <div className="item">
            <ProductHighLight image={Product4} price="$200.00" url="/home"/>
          </div>
          <div className="item">
            <ProductHighLight image={Product5} price="$200.00" url="/home"/>
          </div>
         
        
        </Slider>
        
        
        
      <div className="container">
        <div className="product">
          <h6 className="product-name">
            Black Fur Top Jacket
          </h6>

          <div className="product--item">
            <span className="heading">Material</span>
            <div className="description"></div>
          </div>

          <div className="product--item">
            <span className="heading">Size & Fit</span>
            <div className="description">
              <div className="radio-size">
                <label htmlFor="small">S</label>
                <input type="radio" id="small"/>
              </div>
              <div className="radio-size">
                <label htmlFor="medium">M</label>
                <input type="radio" id="medium"/>
              </div>
              <div className="radio-size">
                <label htmlFor="large">L</label>
                <input type="radio" id="large"/>
              </div>
              <div className="radio-size">
                <label htmlFor="extralarge">XL</label>
                <input type="radio" id="extralarge"/>
              </div>

             
            </div>
          </div>

        </div>
      </div>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false}
          centerMode={true}
          className="slick-thumb"
          
        >
          <div className="item">
            <ProductNavigation image={Product1}/>
          </div>
          <div className="item">
            <ProductNavigation image={Product2}/>
          </div>
          <div>
          <ProductNavigation image={Product3}/>
          </div>
          <div>
          <ProductNavigation image={Product4}/>
          </div>
          <div>
          <ProductNavigation image={Product5}/>
          </div>
        
        </Slider>
      </div>
    );
  }
}
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
import ProductSelection from '../components/ProductSelection'

export default class ProductDescription extends Component {
  
  
    state = {
      nav1: null,
      nav2: null,
      quantity:1,
      openProductSelection:false,
    };


  componentDidMount() {

 
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  increaseQuantity= ()=>{
    this.setState((prevState)=>{
      
        return{
          quantity:prevState.quantity + 1
        }
      
    })
  }
  decreaseQuantity= ()=>{
  
    this.setState((prevState)=>{
      if(prevState.quantity !== 1){
        return{
          quantity:prevState.quantity - 1
        }
      }
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="mt-3 position-relative">
        <img src={Bubble} alt="Layout Design" className="img-bubble"/>
       
      {(this.state.quantity > 1)?<ProductSelection/>:null}

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

          <div className="product-description">
            <span className="heading">Material</span>
            <div className="description">Synthetic Leather</div>
          </div>

          <div className="product-description">
            <span className="heading">Size & Fit</span>
            <div className="description">
              <div className="radio-size">
                <input type="radio" id="small" name="sizeRadio"/>
                <label htmlFor="small">S</label>
              </div>
              <div className="radio-size">
                <input type="radio" id="medium" name="sizeRadio"/>
                <label htmlFor="medium">M</label>
              </div>
              <div className="radio-size">
                <input type="radio" id="large" name="sizeRadio"/>
                <label htmlFor="large">L</label>
              </div>
              <div className="radio-size">
                <input type="radio" id="extralarge" name="sizeRadio"/>
                <label htmlFor="extralarge">XL</label>
              </div>

             
            </div>
          </div>

          <div className="product-description">
            <span className="heading">Colors</span>
            <div className="description">
              <div className="radio-color">
                <input type="radio" id="black" name="colorRadio"/>
                <label htmlFor="black" style={{backgroundColor:'#000'}}></label>
              </div>
              <div className="radio-color">
                <input type="radio" id="white" name="colorRadio"/>
                <label htmlFor="white" style={{backgroundColor:'#fff'}} ></label>
              </div>
              <div className="radio-color">
                <input type="radio" id="orange" name="colorRadio" />
                <label htmlFor="orange" style={{backgroundColor:'red'}} ></label>
              </div>
            

             
            </div>
          </div>

          <div className="product-description align-items-center">
            <span className="heading">Quantity</span>
            <div className="description">
              <button className="btn-quantity mr-3" onClick={this.decreaseQuantity}><i className="ic-minus"></i></button>
              <div className="input-product">
                <label htmlFor="" className="mb-0">{this.state.quantity}</label>
                <input type="hidden" value={this.state.quantity}/>
              </div>
              <button className="btn-quantity ml-3" onClick={this.increaseQuantity}>
                <i className="ic-add"></i>
              </button>
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
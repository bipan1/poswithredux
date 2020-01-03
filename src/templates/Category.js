import React from 'react';
import CategoryCard from '../components/CategoryCard';
import Header from '../components/Header';

class Category extends React.Component{

  constructor(props) {
    super(props)
  
    this.state = {
       primaryList : [
         {
           "category" : "coats & jackets",
           "image" : "http://13.90.151.82:8000/media/images/products/2019/05/IMG_8051new.jpg"
         },
         {
          "category" : "Hats",
          "image" : "http://13.90.151.82:8000/media/images/products/2019/05/IMG_8054.jpg"
         },
         {
           "category" : "headbands",
           "image" : "http://13.90.151.82:8000/media/images/products/2019/05/IMG_8054.jpg"
         }
       ],

       color : ["bg-brown", "bg-info", "bg-pitch", "bg-orange", "bg-pink", "bg-light"]
    }
  }
  
  render() {
    const {color} = this.state;
    // const {primaryList} = this.props.location.state;
    // const newList = [...primaryList]
    //newList.shift();
    const newList = [...this.state.primaryList];
    newList.shift();

    return (
      <>
        <Header/>
          <div className="container mt-4">
          <div className="row">
            <div className="col">
              <CategoryCard title={this.state.primaryList[0].category} image={this.state.primaryList[0].image} 
                background={color[Math.floor(Math.random()*color.length)]}/>
            </div>
          </div>

          <div className="row">
            {
              newList.map(item =>{
                return(
                  <div className="col-6">
                    <CategoryCard title={item.category} image={item.image} 
                      background={color[Math.floor(Math.random()*color.length)]}/>
                  </div>
                )
              })
            }
          </div>
        </div>
      </>
    )
  }
}
export default Category;
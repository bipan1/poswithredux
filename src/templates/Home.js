import React from 'react';
import Slider from "react-slick";
import { loadModels, getFullFaceDescription} from '../api/face';
import {connect} from 'react-redux';
import ProductNavigation from "../components/ProductNavigation";
import Webcam from 'react-webcam';
import { Redirect } from 'react-router-dom';
import {fetchApi, setReidrectFlag} from '../redux';

import Product1 from '../image/product1.png'
import Product2 from '../image/product2.png'
import Product3 from '../image/product3.png'
import Product4 from '../image/product4.png'
import Product5 from '../image/product5.png'

const inputSize = 160;

class Home extends React.Component{

  setRef = webcam => {
    this.webcam = webcam;
  }

  componentWillMount(){
    loadModels();
  }

  initFaceDetection = () => {
    this.interval = setInterval(() => {
      this.handleProcessing();
    }, 2000);
  }

  componentDidMount() {
    this.initFaceDetection()
  }

  handleProcessing = async() => {
    let fullDescription = [];     // function to detect face
    await getFullFaceDescription(
        this.webcam.getScreenshot(),
        inputSize
    ).then(fullDesc => {
        fullDescription = fullDesc
        console.log(fullDescription)
        if(fullDescription.length === 0){
            console.log("Face not detected.")
        }
        else {
          this.callAiApi(); //Ai api is called once the face is detected.
        }
    });
  }

  callAiApi = () => {     //Ai api called when face is detected.
    const list = [];
    clearInterval(this.interval);
    for (let i=0; i<3; i++){
        list.push(this.webcam.getScreenshot())
    }

    //base64 to image file conversion.
    const base64ToBlob = (image, fileName) => {
        const byteString = atob(image);
        const fileType = 'image/'+fileName.split(".")[fileName.split(".").length -1];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        let img = new Blob([ia], { type: fileType });
        return img;
    }
    const file = list.map((image) => base64ToBlob(image.split(',')[1], 'file.png'))

    let formdata = new FormData();

    formdata.append('file', file[0])
    formdata.append('file', file[1])
    formdata.append('file', file[2])

    this.props.fetchApi(formdata);
  }
  
  render () {

    if(this.props.apidata.redirectFlag === true) {
      return <Redirect to={{
        pathname : '/category',
        state : {
          state : this.props.apidata.primaryList
        }
      }}/>
    }

    const videoConstraints = {
      width: 720,
      height: 720,
      facingMode: "user"
    };
  
    return (
      <main className="home">
  
        <h6 className="message-home">
          Welcome
        </h6>
  
        <div className="imgbox">
          <Webcam
            audio={false} videoConstraints={videoConstraints} ref={this.setRef} > 
          </Webcam>
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
            {
              this.props.apidata.flag && 
              <div className="col-2">
                <button onClick={this.props.setReidrectFlag} className="btn btn-warning text-white ">View more</button>
              </div>
            }
          </div>
        </div>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
      apidata : state.home
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchApi : (formdata) => dispatch(fetchApi(formdata)),
      setReidrectFlag : () => dispatch(setReidrectFlag())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
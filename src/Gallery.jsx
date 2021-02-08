import React, { Component } from "react";
 import "./gallery.css";
 
class Gallery extends Component {
  constructor() {
    super();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0,
      imageNumber:8032,
      displayImage:"https://s3-us-west-2.amazonaws.com/roshan.test.bucket/IphonePhotos/NepalVisit2018/IMG_8032.JPG"
    };
  }

  back() {
    debugger;
    this.setState({imageNumber: this.state.imageNumber - 1});
    var newImage = `https://s3-us-west-2.amazonaws.com/roshan.test.bucket/IphonePhotos/NepalVisit2018/IMG_${this.state.imageNumber}.JPG`;
    this.setState({displayImage:newImage});
  }

  next() {
    debugger;
    this.setState({imageNumber: this.state.imageNumber + 1});
    var newImage = `https://s3-us-west-2.amazonaws.com/roshan.test.bucket/IphonePhotos/NepalVisit2018/IMG_${this.state.imageNumber}.JPG`;
    this.setState({displayImage:newImage});
  }

  render() {
    const {displayImage} = this.state;
    return (
      <div className="App">
        <h3>Slide Effect</h3>
        <div className="image-container">
                <img className="displayImage" src={displayImage} alt="sample" />
        </div>

        <div className="slide-container buttons">
          <button onClick={this.back} type="button">
            Go Back
          </button>
          <button onClick={this.next} type="button">
            Go Next
          </button>
        </div>
      </div>
    );
  }
}

export default Gallery;
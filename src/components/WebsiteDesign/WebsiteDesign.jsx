import React, { useState } from 'react';
import './website-design.css';

function Header() {
    const gallery = "SauravWedding";

    const [imageNumber, setImageNumber] = useState(5487);
    const [displayImage, setDisplayImage] = useState(`https://s3-us-west-2.amazonaws.com/roshan.test.bucket/IphonePhotos/${gallery}/IMG_8032.JPG`);
  
    const back = () => {
      var newNumber = imageNumber -1;
      setImageNumber(newNumber);
      var newImage = `https://s3-us-west-2.amazonaws.com/roshan.test.bucket/IphonePhotos/${gallery}/IMG_${imageNumber}.JPG`;
      setDisplayImage(newImage);
    }
  
    const next = () => {
      var newNumber = imageNumber  + 1;
      setImageNumber(newNumber);
      var newImage = `https://s3-us-west-2.amazonaws.com/roshan.test.bucket/IphonePhotos/${gallery}/IMG_${imageNumber}.JPG`;
      setDisplayImage(newImage);
    }


    return (
        <section class="presentation">
            <div class="introduction">
                <div class="intro-text">
                    <h1>Website Design</h1>
                    <p>
                        We help small business build and host responsive webistes that is compatible in all devices.
                        Our expert team takes into consideration about the search engines like google, bing and yahoo and study their algorithms to 
                        optimize website which helps in organic traffic and thrive your business.
                    </p>
                    <p>
                        We also help you create logo for your company which helps in branding your company. A well design logo is necessary to build trust with your customer.
                    </p>
                </div>
            </div>
            <div>
                <div class="cover">
                    <img src="./img/matebook.png" alt="matebook" />
                </div>
                <div class="laptop-select">
                    <button onClick={() => back()} type="button">
                        <img src="./img/arrow-left.svg" alt="" />
                    </button>
                        <img src="./img/dot.svg" alt="" />
                        <img src="./img/dot-full.svg" alt="" />
                        <img src="./img/dot-full.svg" alt="" />
                    <button onClick={() => next()} type="button">
                        <img src="./img/arrow-right.svg" alt="" />
                    </button>
                </div>
            </div>

        <img class="big-circle" src="./img/big-eclipse.svg" alt="" />
        <img class="medium-circle" src="./img/mid-eclipse.svg" alt="" />
        <img class="small-circle" src="./img/small-eclipse.svg" alt="" />
        
        </section>
    );
  }
  export default Header;
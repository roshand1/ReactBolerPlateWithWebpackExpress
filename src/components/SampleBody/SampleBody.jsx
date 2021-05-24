import React, { useState } from 'react';
import './samplebody.css';

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
        <main>
        <div className="background-svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0f169b" fill-opacity="1" d="M0,288L60,293.3C120,299,240,309,360,288C480,267,600,213,720,181.3C840,149,960,139,1080,138.7C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </div>
        <section class="presentation">
            <div class="introduction">
                <div class="intro-text">
                    <h1>Website Design</h1>
                    <p>
                        We build responsive website that will turn your website viewer to your customer.
                    </p>
                </div>
            </div>
            <div class="cover">
                <img src="./img/matebook.png" alt="matebook" />
            </div>
        </section>

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

        <img class="big-circle" src="./img/big-eclipse.svg" alt="" />
        <img class="medium-circle" src="./img/mid-eclipse.svg" alt="" />
        <img class="small-circle" src="./img/small-eclipse.svg" alt="" />
    </main>
    );
  }
  export default Header;
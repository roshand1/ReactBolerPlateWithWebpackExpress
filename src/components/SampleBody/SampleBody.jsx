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
        <section class="presentation">
            {/* <div class="introduction">
                <div class="intro-text">
                    <h1>Laptop for the future</h1>
                    <p>
                        The new 14 inch bezeless display oferring a 4k
                        display with touch screen.
                    </p>
                </div>
                <div class="cta">
                    <button class="cta-select">14 Inch</button>
                    <button class="cta-add">Add To Cart</button>
                </div>
            </div> */}
            <div class="cover">
                <img src={displayImage} alt="matebook" />
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
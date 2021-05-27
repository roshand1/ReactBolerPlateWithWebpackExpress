import React, { useState } from 'react';
import './testimonies.css'
import {testimonies} from './testimonies.js'
import Slider from "../Slider/Slider.jsx";
import Testimony from "../Testimony/Testimony.jsx";

function Testimonies() {
    const [displayTestimony, setTestimony] = useState(testimonies[0]);
    const back = () => {
        const nextIndex = testimonies.indexOf(displayTestimony) - 1;
        if(nextIndex < 0){
            setTestimony(testimonies[0]);
        }
        else{
            setTestimony(testimonies[nextIndex]);
        }
      }
    
      const next = () => {
        const nextIndex = testimonies.indexOf(displayTestimony) + 1;
        if(nextIndex >= testimonies.length){
            setTestimony(testimonies[0]);
        }else{
            setTestimony(testimonies[nextIndex]);
        }
      }

    return (
        <div className="testimonies-section">
           <div>
            <Testimony testimony={displayTestimony.testimony} name={displayTestimony.name} />
           </div>
           <div className="testimony-slider">
            <Slider next={next} back={back}/>
           </div>
        </div>
    );
  }
  export default Testimonies;
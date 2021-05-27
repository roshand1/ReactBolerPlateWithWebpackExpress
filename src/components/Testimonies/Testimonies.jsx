import './testimonies.css'

import Slider from "../Slider/Slider.jsx";
import Testimony from "../Testimony/Testimony.jsx";

function Testimonies() {
    return (
        <div className="testimonies-section">
           <div>
            <Testimony testimony='I loved the service of this company' name='Janardan Ghimire'></Testimony>
           </div>
           <div className="testimony-slider">
            <Slider></Slider>
           </div>
        </div>
    );
  }
  export default Testimonies;
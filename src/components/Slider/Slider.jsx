import './slider.css';

function Slider() {
    return (
        <div class="slider-select">
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
    );
  }
  export default Slider;
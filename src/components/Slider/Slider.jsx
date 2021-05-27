import './slider.css';

function Slider(props) {
    const {next, back} = props;
    const backButton = () => {
        back();
      }
    
      const nextButton = () => {
        next();
      }

    return (
        <div class="slider-select">
            <button onClick={() => backButton()} type="button">
                <img src="./img/arrow-left.svg" alt="" />
            </button>
                <img src="./img/dot.svg" alt="" />
                <img src="./img/dot-full.svg" alt="" />
                <img src="./img/dot-full.svg" alt="" />
            <button onClick={() => nextButton()} type="button">
                <img src="./img/arrow-right.svg" alt="" />
            </button>
        </div>
    );
  }
  export default Slider;
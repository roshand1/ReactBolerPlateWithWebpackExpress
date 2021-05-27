import './testimony.css'

function Testimony(props) {
	const {testimony, name} = props;
    return (
        <div className="testimony-section">
            <div  className="testimony">
                <div className="quote-icon quote-icon-left">
                    <i class="bi bi-chat-quote-fill"></i>
                </div>
                <div className="testimony-text">
                    <h3>{testimony}</h3>
                </div>
                <div className="quote-icon">
                    <i class="bi bi-chat-quote-fill"></i>
                </div>
            </div>
            <div className="testimony-name">
                <span>
                        - {name} -
                </span>
            </div>
        </div>
    );
  }
  export default Testimony;
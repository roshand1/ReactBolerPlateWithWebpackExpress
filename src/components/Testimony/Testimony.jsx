import './testimony.css'

function Testimony(props) {
	const {testimony} = props;
    return (
        <div className="testimony-section">
            <div className="quote-icon quote-icon-left">
                <i class="bi bi-chat-quote-fill"></i>
            </div>
            <div className="testimony-text">
                <h1>{testimony}</h1>
            </div>
            
            <div className="quote-icon">
                <i class="bi bi-chat-quote-fill"></i>
            </div>
        </div>
    );
  }
  export default Testimony;
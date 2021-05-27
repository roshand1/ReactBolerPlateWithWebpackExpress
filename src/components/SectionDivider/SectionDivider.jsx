import './section-divider.css';

function SectionDivider(props) {
	const {title} = props;
    return (
        <div className="divider">
            <h1>{title}</h1>
        </div>
    );
  }
  export default SectionDivider;
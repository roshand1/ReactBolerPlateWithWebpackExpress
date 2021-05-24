import './header.css';

function Header() {
    return (
        <div className="header">
            <div className="logo-container">
				<h4 className="logo">
				<img src="./img/BlueSvg.svg" className="logo-image" alt="" />
					<span className="company-name">rdmarketing</span>
				</h4>
			</div>
			<nav>
				<ul className="nav-links">
					<li><a className="nav-link" href="#">What We Do</a></li>
					<li><a className="nav-link" href="#">Gallery</a></li>
					<li><a className="nav-link" href="#">Specials</a></li>
				</ul>
			</nav>
			<div>
				CALL US NOW FOR SPECIAL DEAL 
				214 300 9560
			</div>
        </div>
    );
  }
  export default Header;
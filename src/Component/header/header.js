import React, { Component } from 'react';
import './header.scss'
class Header extends Component {
  render() {
    return <div>
    		<header className="header">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-3">
				<a href=""><img className="header__logo" src="http://quadrant.kinsta.cloud/wp-content/themes/quadrant/assets/images/brand/brand-logo-old.png" width="182" alt="Quadrant Strategies"/></a>
					
				</div>
				<div className="col-md-6">
					<ul className="header__menu">
						<li className="header__nav"><a className="header__link" href="#">Solutions</a></li>
						<li className="header__nav"><a className="header__link" href="#">About</a></li>
						<li className="header__nav"><a className="header__link" href="#">Career</a></li>
						<li className="header__nav"><a className="header__link" href="#">Contact</a></li>
					</ul>
				</div>
				<div className="col-md-3 text-right">
					<a className="header__btn btn" href="#">Inquiry</a>
				</div>
			</div>
		</div>
	</header>
    </div>;
  }
}

export default Header;

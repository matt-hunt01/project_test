import React, {Component} from 'react';

class Slide extends Component {
    render() {
        const active = this.props.active == 0 ? 'active' : '';
        return ( 
            <div className={"carousel-item " + active} >
            <img className="carousel__img" src={this.props.url} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
                <h5 className="carousel__heading">Quadrant Strategies is a research-driven consultancy that works with Fortune 100 companies.</h5>
                <p className="carousel__para">Quadrant Strategies is a research-driven consultancy that works with Fortune 100 companies, global political leaders, and major NGOs.</p>
                </div>
            </div>  
        );
    }
}

export default Slide;
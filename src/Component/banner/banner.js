import React, { Component } from 'react';
import Slide from '../banner/slide';

class Banner extends Component {
	state = {
		images: []
	}

	componentDidMount(){
		fetch(`https://api.unsplash.com/photos/?client_id=e89fd542176803147d1e256b3dc6d11374c506daf2f5792c64f571bcbff55b6e`)
		.then(res => res.json())
		.then(data => this.setState({
			images: data
		}));
	}


  render() {
    return (
		<div>
      	<div id="carouselSlidesOnly" className="carousel slide" data-ride="carousel">
			<div className="carousel-inner">
				{this.state.images.map((image, key) => {
					return <Slide key={image.id} url={image.urls.regular} active={key} description={image.description}/>	
					
				})}
			</div>
			<a class="carousel-control-prev" href="#carouselSlidesOnly" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselSlidesOnly" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
		  </div>
			
		</div>
		);
  }
}

export default Banner;

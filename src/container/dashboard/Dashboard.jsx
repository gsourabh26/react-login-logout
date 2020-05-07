import React, {Component} from 'react';
import animalMock from '../../animalMock.js';

import "./dashboard.css";
import Slideshow from "../../components/slideshow/Slideshow";

import dog from "../../assets/dog.png";
import cat from "../../assets/cat.png";

class Dashboard extends Component {
	state = {
		isCatLover: true,
		showAnim: false
	}

	toggleSlideshowState = (event) => {
		this.setState({isCatLover: !this.state.isCatLover, showAnim: true});

		setTimeout(_=>{
			this.setState(prevState => {
				return {
					showAnim: !prevState.showAnim
				}
			})
		}, 5000);
	}

	render() {
		return (
			<React.Fragment>
				<div className={this.state.showAnim ? "show-animation" : ""} onClick={e=>this.toggleSlideshowState(e)}>
					<div className="slide-toggler">
					<div className="pet-icon"> 
						{this.state.isCatLover ? <img src={cat} alt="cat" /> : <img src={dog} alt="dog" />}
					</div>
					</div>
					<div className="info-about-animal">
						<h1>Do you know?</h1>
						<div className="info">
							{
								this.state.isCatLover ? 
									animalMock.facts.cats[Math.floor(Math.random() * 6)]
								:	
									animalMock.facts.dogs[Math.floor(Math.random() * 7)]
							}
						</div>
					</div>	
				</div>

				{this.state.isCatLover ? <Slideshow cardsInfo={animalMock.cats}/> : <Slideshow cardsInfo={animalMock.dogs}/>}
			</React.Fragment>
		)
	}
}

export default Dashboard;
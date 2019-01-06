import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

import UiButton from '../UI/Button';

class Pricing extends Component {
    constructor(props){
        super(props);
        this.state = {
            prices: [100,150,250],
            positions: ['Balcony','Medium','Star'],
            description: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            ],
            linkTo: [
                'http://frontendtwin.co.uk',
                'http://frontendtwin.co.uk',
                'http://frontendtwin.co.uk'
            ],
            delay: [500,0,500]
        }
    }


    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom key={i} delay={this.state.delay[i]}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>£{this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                            
                        </div>
                        <div className="pricing_description">
                            <span>{this.state.description[i]}</span>
                        </div>
                        <div className="pricing_buttons">
                            <UiButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkTo[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )


    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;
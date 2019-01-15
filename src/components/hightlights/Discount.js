import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import UiButton from '../UI/button';

class Discount extends Component {
    constructor(props){
        super(props)
        this.state= {
            discountStart: 0,
            discountEnd: 40
        }
    }

    startCount = () => {
        var {discountStart, discountEnd} = this.state
        if(discountStart < discountEnd){
            this.setState({
                discountStart: discountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout( () => {
            this.startCount()
        }, 40)
    }


    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={() => this.startCount()}
                    >
                        <div className="discount_percentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20<sup>th</sup> June</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi dapibus quam lacinia tristique id vel elit. Quisque nec consectetur dui. Ut sed tellus risus. In tempor cursus metus sit amet molestie. Pellentesque dictum tellus vitae magna porttitor efficitur.</p>
                            <UiButton
                                text="Purchase tickets"
                                bck="#ffa800"
                                color="#ffffff"
                                link="http://frontendtwin.co.uk"
                            />
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;
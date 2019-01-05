import React from 'react';
import Carrousel from './carrousel';
import Countdown from './countdown';

const Featured = () => {
    return (
        <div style={{position: 'relative'}}>

        <Carrousel/>

            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>

        <Countdown></Countdown>

        </div>
    );
};

export default Featured;
import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9424.86127527177!2d-1.5421362!3d53.8034522!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x775dffec000de761!2sFirst+Direct+Arena!5e0!3m2!1sen!2suk!4v1546796611174"
             width="100%" 
             height="500" 
             frameBorder="0" 
             allowfullscreen></iframe>

             <div className="location_tag">
                <div>Location</div>
             </div>
        </div>
    );
};

export default Location;
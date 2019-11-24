import React from 'react';

import './FourGrid.css';

const FourGrid = () => {
    return(
        <div className="main_wrapper">
            <div className="col_wrapper">
                <div className="grid_item">
                    <img alt="features" src="https://www.happn.com/public/images/home/commitment/home-commitment-1.png" style={{height: '77px', width: "77px"}}/>
                    <div>
                        <h4>We promise, no one will bother you!</h4>
                        <p>
                        Kupenda users can only talk to one another if they have both Liked each other. 
                            'This condition of reciprocity lets you use the app without fear of spamming or harassment.
                        </p>
                    </div>
                </div>
                <div className="grid_item">
                <img alt="features" src="https://www.happn.com/public/images/home/commitment/home-commitment-2.png" style={{height: '77px', width: "77px"}}/>
                    <div>
                        <h4>We guarantee the privacy of your data</h4>
                        <p>
                        Kupenda users can only talk to one another if they have both Liked each other. 
                            'This condition of reciprocity lets you use the app without fear of spamming or harassment.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col_wrapper">
                <div className="grid_item">
                <img alt="features" clasName="grid_img" src="https://www.happn.com/public/images/home/commitment/home-commitment-3.png" style={{height: '77px', width: "77px"}}/>
                    <div>
                        <h4>Your opinion matters!</h4>
                        <p>
                            Kupenda users can only talk to one another if they have both Liked each other. 
                            'This condition of reciprocity lets you use the app without fear of spamming or harassment.
                        </p>
                    </div>
                </div>
                <div className="grid_item">
                <img alt="features" src="https://www.happn.com/public/images/home/commitment/home-commitment-4.png" style={{height: '77px', width: "77px"}}/>
                    <div>
                        <h4>Report inappropriate profiles</h4>
                        <p>
                        Kupenda users can only talk to one another if they have both Liked each other. 
                            'This condition of reciprocity lets you use the app without fear of spamming or harassment.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default FourGrid
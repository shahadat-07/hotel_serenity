import React from 'react';
import '../ShareCss/ShareCss.css';

const ReviewHotelRules = () => {
    return (
        <div className="container review-container">
            <div className="row">
                <div className="col-md-6">
                    <h2>Review hotel rules</h2>
                    <h5>5 nights in Rajshahi</h5>
                    <div className="row">
                        <div className="col-6">
                            <div className="d-flex">
                                <div className="date-style">
                                    <p>MAY</p>
                                    <p>29</p>
                                </div>
                                <div className="common-margin-left">
                                    <p>Monday check-in</p>
                                    <p>after 02:30 PM</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex">
                                <div>
                                    <p>JUN</p>
                                    <p>3</p>
                                </div>
                                <div className="common-margin-left">
                                    <p>Thursday checkout</p>
                                    <p>after 10:00 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewHotelRules;
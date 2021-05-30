import React from 'react';
import { reviewRules } from '../../FakeData/data';
import '../ShareCss/ShareCss.css';
import ReviewForm from './ReviewForm';
import Rules from './Rules';

const ReviewHotelRules = () => {
    return (
        <div className="container review-container">
            <div className="row mt-5">
                <div className="col-md-6 mb-4">
                    <h2>Review hotel rules</h2>
                    <h5>5 nights in Rajshahi</h5>
                    <div className="row mb-4 mt-3">
                        <div className="col-md-6">
                            <div className="d-flex">
                                <div className="date-style date-specific-style text-center mb-2">
                                    <p className="">MAY</p>
                                    <p>29</p>
                                </div>
                                <div className="date-style">
                                    <p>Monday check-in</p>
                                    <p>after 02:30 PM</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex">
                                <div className="date-style date-specific-style text-center">
                                    <p>JUN</p>
                                    <p>3</p>
                                </div>
                                <div className="date-style">
                                    <p>Thursday checkout</p>
                                    <p>after 10:00 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>Self check-in with building staff</p>
                    <hr />
                    <div>
                        <h5 className="mb-4 mt-5">Think to keep in mind</h5>
                        {
                            reviewRules.map((rule, index) => <Rules key={index} rule={rule}></Rules>)
                        }
                    </div>
                    <div className="button-big-device">
                        <button className="btn btn-success mt-3">Agree and continue</button>
                    </div>
                </div>
                <div className="col-md-5">
                    <ReviewForm></ReviewForm>
                </div>
            </div>
            <div className="button-small-device mt-3 text-end mb-5">
                <button className="btn btn-success mt-3">Agree and continue</button>
            </div>
        </div>
    );
};

export default ReviewHotelRules;
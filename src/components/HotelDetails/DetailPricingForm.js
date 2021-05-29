import React from 'react';
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DetailPricingForm = () => {
    return (
        <div className="shadow p-3 bg-body pricing-form-container">
            <h5>$34/ <span>night</span></h5>
            <small><span className="text-success"><FontAwesomeIcon icon={faStar} /></span> (67 reviews)</small>
            <div>
                <div>
                    <small>Dates</small>
                    <div className="row date-size">
                        <div className="col-4">5/29/2021</div>
                        <div className="col-4 text-center"><FontAwesomeIcon icon={faArrowRight} /></div>
                        <div className="col-4">6/3/2021</div>
                    </div>
                    <small>Guests</small>
                    <select className="form-select mt-1">
                        <option value="1">4 Guests</option>
                        <option value="2">2 Guests</option>
                        <option value="3">1 Guest</option>
                    </select>
                    <table className="table mt-2">
                        <tbody>
                            <tr>
                                <td>$34 x 4 nights</td>
                                <td>$136</td>
                            </tr>
                            <tr>
                                <td>Cleaning fee</td>
                                <td>$15</td>
                            </tr>
                            <tr>
                                <td>Service fee</td>
                                <td>$24</td>
                            </tr>
                            <tr>
                                <td><b>Total</b></td>
                                <td><b>$167</b></td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="form-control bg-info text-white">Reserve</button>
                    <div className="mt-2 text-center text-secondary">
                        <small>You won't be changed yet</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPricingForm;
import React from 'react';
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewForm = () => {
    return (
        <div className="shadow bg-body form-container">
            
            <div>
                <div className="mt-3">
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
                </div>
            </div>
        </div>
    );
};

export default ReviewForm;
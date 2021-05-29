import React from 'react';
import './BillCard.css';
const BillCard = () => {
    return (
        <div id="billCard" className="container mb-5 p-5">
            <div className="row">
                <div className="col-md-7">
                    <h4>Lorem ipsum dolor sit amet consecteturt.</h4>
                    <small className="review">4.9(20 reviews)</small>
                </div>
                <div className="col-md-5">
                    <h1>Image</h1>
                </div>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select Menu</option>
                    <option value="1">1 Guest</option>
                    <option value="2">3 Guest</option>
                    <option value="3">5 Guest</option>
                </select><br/>
                <table class="table">
                    <tbody>
                        <tr>
                            <td>$34 * 4 Nights</td>
                            <td>Cleaning Fee</td>
                            <td>Service Fee</td>
                            <td><b>Total</b></td>
                        </tr>
                        <tr>
                            <td>$136</td>
                            <td>$10</td>
                            <td>$21</td>
                            <td><b>$167</b></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BillCard;
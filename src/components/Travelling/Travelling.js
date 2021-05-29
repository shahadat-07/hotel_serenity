import React from 'react';
import BillCard from '../Shared/BillCard/BillCard';

const Travelling = () => {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6">
                <h3>Travelling For Works?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tempora, consequatur ducimus natus perferendis nemo?</p>
                <textarea class="form-control rounded-0" rows="8" placeholder="Write Your Message"></textarea>
                <button type="submit" className="btn btn-lg btn-outline-info mt-3">Continue</button>
                </div>
                <div className="col-md-6">
                    <BillCard></BillCard>
                </div>
            </div>
        </div>
    );
};

export default Travelling;
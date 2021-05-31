import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { SelectedHotelContext } from '../../App';
import DetailPricingForm from '../HotelDetails/DetailPricingForm';
import BillCard from '../Shared/BillCard/BillCard';

const Travelling = () => {
    const [selectedHotel] = useContext(SelectedHotelContext);
    const history = useHistory();
    const handleClick = () => {
        history.push('/pay')
    }
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6">
                    <h3>Travelling For Works?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tempora, consequatur ducimus natus perferendis nemo?</p>
                    <textarea class="form-control rounded-0" rows="8" placeholder="Write Your Message"></textarea>
                    <button onClick={handleClick} type="submit" className="btn btn-lg btn-outline-info mt-3">Continue</button>
                </div>
                <div className="col-md-6">
                    <div className="pricing-section">
                        <DetailPricingForm hotelData={selectedHotel} showRating={false} showHotel={true} showButton={false}></DetailPricingForm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Travelling;
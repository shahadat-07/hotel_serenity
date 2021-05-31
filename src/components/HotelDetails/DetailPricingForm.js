import React from 'react';
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';
import {
    incrementAdults,
    decrementAdults,
    incrementChild,
    decrementChild,
    incrementBabies,
    decrementBabies
} from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const DetailPricingForm = ({ hotelData, showRating, showHotel, showButton }) => {
    const history = useHistory();
    console.log(hotelData)
    const handleReserve = () => {
        history.push('/review')
    }

    const adults = useSelector(state => state.adults);
    const child = useSelector(state => state.child);
    const babies = useSelector(state => state.babies);
    const dispatch = useDispatch();
    return (
        <div className="shadow bg-body form-container">
            {showRating &&
                <div>
                    <h5>${hotelData?.price}/ <span>night</span></h5>
                    <small><span className="star-color"><FontAwesomeIcon icon={faStar} /></span> {hotelData?.ratings} (67 reviews)</small>
                </div>
            }
            {showHotel &&
                <div className="row">
                    <div className="col-8">
                        <h5>{hotelData?.title}</h5>
                        <small><span className="star-color"><FontAwesomeIcon icon={faStar} /></span>{hotelData?.ratings} (67 reviews)</small>
                    </div>
                    <div className="col-4">
                        <img className="img-fluid rounded-3" src={hotelData?.hotelImg} alt="" />
                    </div>
                </div>
            }



            <div>
                <div className="mt-3">
                    <small>Dates</small>
                    <div className="row date-size">
                        <div className="col-4">5/29/2021</div>
                        <div className="col-4 text-center"><FontAwesomeIcon icon={faArrowRight} /></div>
                        <div className="col-4">6/3/2021</div>
                    </div>
                    <small>Guests</small>
                    <div className="row p-3">


                        <div className="accordion m-0" id="accordionExample">
                            <p className="fw-bold text-muted">Guests</p>
                            <div className="accordion-item m-0">
                                <div className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <p className="fw-bold">
                                            Adult, Child, Babies
                                        </p>
                                    </button>
                                </div>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="row gy-5 gx-3 px-3">
                                        <div className="col-7 d-flex align-items-center">
                                            <p className="fw-bold">ADULTS</p>
                                        </div>
                                        <div className="col-5">
                                            <div className="input-group">
                                                <button onClick={() => dispatch(decrementAdults())} className="btn fs-2 fw-bold p-0 m-2 btn-focus" type="button" id="button-addon1">-</button>
                                                <input type="text" name="adults" value={adults} className="form-control bg-white form-control-sm text-center fs-4 fw-bold input-field p-0 m-0" aria-label="Example text with button addon" aria-describedby="button-addon1"  />
                                                <button onClick={() => dispatch(incrementAdults())} className="btn fs-2 fw-bold p-0 m-2 btn-focus" type="button" id="button-addon1">+</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row gy-5 gx-3 px-3">
                                        <div className="col-7 d-flex align-items-center">
                                            <div>
                                                <p className="fw-bold m-0">CHILD</p>
                                                <small className="text-muted">Age 2-12</small>
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <div className="input-group">
                                                <button onClick={() => dispatch(decrementChild())} className="btn fs-2 fw-bold p-0 m-2 btn-focus" type="button" id="button-addon1">-</button>
                                                <input type="text" name="child" value={child} className="form-control bg-white form-control-sm text-center fs-4 fw-bold input-field p-0 m-0" aria-label="Example text with button addon" aria-describedby="button-addon1"  />
                                                <button onClick={() => dispatch(incrementChild())} className="btn fs-2 fw-bold p-0 m-2 btn-focus" type="button" id="button-addon1">+</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row gy-5 gx-3 px-3">
                                        <div className="col-7 d-flex align-items-center">
                                            <div>
                                                <p className="fw-bold m-0">BABIES</p>
                                                <small className="text-muted">Younger than 2</small>
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <div className="input-group mb-2">
                                                <button onClick={() => dispatch(decrementBabies())} className="btn fs-2 fw-bold p-0 m-2 btn-focus" type="button" id="button-addon1">-</button>
                                                <input type="text" name="babies" value={babies} className="form-control bg-white form-control-sm text-center fs-4 fw-bold input-field p-0 m-0" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                                <button onClick={() => dispatch(incrementBabies())} className="btn fs-2 fw-bold p-0 m-2 btn-focus" type="button" id="button-addon1">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>
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
                    {showButton &&
                        <>
                            <button onClick={handleReserve} className="form-control bg-info text-white">Reserve</button>
                            <div className="mt-2 text-center text-secondary">
                                <small>You won't be changed yet</small>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default DetailPricingForm;
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import './Search.css';
import {
    incrementAdults,
    decrementAdults,
    incrementChild,
    decrementChild,
    incrementBabies,
    decrementBabies,
    setLocation,
    setDepartureDate,
    setArrivalDate
} from '../../../redux/actions';
import { useHistory } from 'react-router';

const Search = () => {

    const adults = useSelector(state => state.adults);
    const child = useSelector(state => state.child);
    const babies = useSelector(state => state.babies);
    const dispatch = useDispatch();
    const history = useHistory();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        dispatch(setLocation(data.location));
        dispatch(setArrivalDate(data.arrival));
        dispatch(setDepartureDate(data.departure));
        history.push('/hotels')
    };



    // console.log('location',watch('location'));

    const newDate = new Date();
    newDate.setDate(newDate.getDate());
    const currentDate = newDate.toISOString().substr(0, 10);

    const date = new Date();
    newDate.setDate(date.getDate() + 3);
    const futureDate = newDate.toISOString().substr(0, 10);

  

    return (
        <div className="col py-5">
            <h6>Where Do You Want To Go</h6>
            <form onSubmit={handleSubmit(onSubmit)}>



                <div className="mb-3 p-3 bg-white shadow">
                    <label htmlFor="location" className="form-label fw-bold">Location</label>
                    <input type="text" name="location" placeholder="City, Landmark, or Address" id="location" className="form-control input-field" {...register("location", { required: true })} />
                    {errors.location && <span className="text-danger">Enter a location</span>}
                </div>

                <div className="row g-3 mb-3">
                    <div className="col-6">
                        <div className="mb-3 p-3 pe-0 bg-white shadow">
                            <label htmlFor="arrival" className="form-label fw-bold">Arrival</label>
                            <input type="date" name="arrival" defaultValue={currentDate} id="arrival" className="form-control input-field" {...register("arrival", { required: true })} />
                            {errors.arrival && <span>Select a date</span>}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3 p-3 pe-0 bg-white shadow">
                            <label htmlFor="departure" className="form-label fw-bold">Departure</label>
                            <input type="date" name="departure" defaultValue={futureDate} id="departure" className="form-control input-field" {...register("departure", { required: true })} />
                            {errors.departure && <span>Select a date</span>}
                        </div>
                    </div>
                </div>

                <div className="shadow rounded pt-1 mb-3" >

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
                                                <input type="text" name="adults" value={adults} className="form-control bg-white form-control-sm text-center fs-4 fw-bold input-field p-0 m-0" aria-label="Example text with button addon" aria-describedby="button-addon1" {...register("adults", { required: true })} />
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
                                                <input type="text" name="child" value={child} className="form-control bg-white form-control-sm text-center fs-4 fw-bold input-field p-0 m-0" aria-label="Example text with button addon" aria-describedby="button-addon1" {...register("child", { required: true })} />
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
                                                <input type="text" name="babies" value={babies} className="form-control bg-white form-control-sm text-center fs-4 fw-bold input-field p-0 m-0" aria-label="Example text with button addon" aria-describedby="button-addon1" {...register("babies", { required: true })} />
                                                <button onClick={() => dispatch(incrementBabies())} className="btn fs-2 fw-bold p-0 m-2 btn-focus" type="button" id="button-addon1">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>

                </div>

                <button type="submit" className="btn text-white fs-5 btn-success d-block w-100">Search</button>
            </form>
        </div>
    );
};

export default Search;
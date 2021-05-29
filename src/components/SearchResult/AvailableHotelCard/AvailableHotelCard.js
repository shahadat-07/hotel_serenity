import React from 'react';

const AvailableHotelCard = () => {
    
    return (
        <div className="col">
            <div className="card border-0 border-bottom pb-1 mb-3 py-0">
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center">
                        <img className="img-fluid" src="https://images.unsplash.com/photo-1530125086495-effd3661612e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjU3fHxob3RlbCUyMHJvb218ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="hotel" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text-decoration-none fw-bold fs-5 m-0 p-0">Hotel Name</h5>
                            <p className="card-text">{3} guests {2} bedrooms {2} beds {2} baths</p>
                            <p className="card-text"><small className="text-muted">facilities1</small></p>
                            <p className="card-text mb-0"><small className="text-muted">facilities2</small></p>
                            <div className="d-flex justify-content-between">
                                <p>User Ratings: {4.9}</p>
                                <p>${100}/night</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableHotelCard;
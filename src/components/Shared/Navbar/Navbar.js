import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="##">Hotel Serenity</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link active" aria-current="page" href="##">Host your home</a>
                        <a className="nav-link" href="##">Host your experience</a>
                        <a className="nav-link" href="##">Help</a>
                        <a className="nav-link" href="##">Log in</a>
                        <a className="nav-link btn btn-success text-white" href="##">Sign up</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
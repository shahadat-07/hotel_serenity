import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="##">Hotel Serenity</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <a class="nav-link active" aria-current="page" href="##">Host your home</a>
                        <a class="nav-link" href="##">Host your experience</a>
                        <a class="nav-link" href="##">Help</a>
                        <a class="nav-link" href="##">Log in</a>
                        <a class="nav-link btn btn-success text-white" href="##">Sign up</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
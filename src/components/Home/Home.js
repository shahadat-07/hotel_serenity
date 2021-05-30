import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Hotels from './Hotels/Hotels';
import Search from './Search/Search';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Search/>
                    </div>
                    <div className="col-md-8">
                        <Hotels/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
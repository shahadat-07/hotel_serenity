import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Hotels from './Hotels/Hotels';
import Search from './Search/Search';
import Payment from '../Payment/Payment';

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
                    {/* <Payment/>
                    <Search />
                    <Hotels /> */}

                </div>
            </div>
        </>
    );
};

export default Home;
import React from 'react';
import FlatAbs from './FlatAbs';
import Program from './Program';
import Schedule from './Schedule';
import Teachers from './Teachers';

const Home = () => {
    return (
        <div>
            <FlatAbs />
            <Program />
            <Schedule />
            <Teachers />
        </div>
    );
};

export default Home;
import React from 'react';
import './Program.css';
import chartImg from '../../assets/image-chart.png';

const Program = () => {
    return (
        <div style={{ backgroundColor: '#fff3ea' }}>
            <div style={{ width: '1128px', height: '442px' }} className='mx-auto grid grid-cols-2'>
                <div>
                    <h1 style={{
                        fontFamily: 'Avenir LT Std',
                        fontSize: '37px', marginTop: '48px',
                        color: '#000000'
                    }}>
                        Structure of program
                    </h1>
                    <p style={{
                        fontFamily: 'Avenir LT Std',
                        fontSize: '18px', width: '442px',
                        color: '#000000'
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                    <p>
                        <span style={{ color: '#f24581', fontSize: '80px', marginTop: '69px' }}>90</span>
                        <span style={{ color: '#000000', fontSize: '30px', marginLeft: '10px' }}>Days</span>
                    </p>
                    <p style={{ marginTop: '18px', color: '#565656' }}>
                        Yoga | Recovery | Rest | Repeat
                    </p>
                </div>
                <div>
                    <img src={chartImg} style={{ paddingLeft: '15px' }} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Program;
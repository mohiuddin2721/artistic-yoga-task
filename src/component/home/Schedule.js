import React from 'react';
import circle from '../../assets/Ellipse-3.png';
import circle2 from '../../assets/Ellipse-3 (1).png';
import woman from '../../assets/dane-woman.png';
import btnLeft from '../../assets/Polygon-1.png';
import btnRight from '../../assets/Polygon-2.png';
import halfCircle from '../../assets/Ellipse-4.png';
import mainStar from '../../assets/Ellipse 20.png';
import star2 from '../../assets/Ellipse 21.png';
import star3 from '../../assets/Ellipse 22.png';
import star4 from '../../assets/Ellipse 23.png';
import star5 from '../../assets/Ellipse 24.png';
import star6 from '../../assets/Ellipse 25.png';
import star7 from '../../assets/Ellipse 26.png';

const Schedule = () => {
    return (
        <div style={{ backgroundColor: '#fdf8f4', height: '774px' }}>
            <div style={{ width: '1128px' }} className='mx-auto'>
                <h1 style={{ paddingTop: '56px', fontSize: '30px', color: '#000000' }}>Schedule</h1>
                <div className='grid grid-cols-2'>
                    <div style={{ position: 'relative' }}>
                        <img
                            src={circle}
                            style={{ position: 'absolute', paddingLeft: '48px', marginTop: '90px', width: '390px', zIndex: 1 }}
                            alt="" />
                        <img
                            src={circle2}
                            style={{ position: 'absolute', paddingLeft: '48px', marginTop: '250px', width: '390px', zIndex: 2 }}
                            alt="" />
                        <img
                            src={woman}
                            style={{ position: 'absolute', top: '115px', left: '110px', width: '210px', zIndex: 1 }}
                            alt="" />
                        <img
                            src={halfCircle}
                            style={{ position: 'absolute', top: '240px', left: '5px', width: '380px' }}
                            alt="" />
                        <img
                            src={mainStar}
                            style={{ position: 'absolute', top: '210px', left: '-25px', width: '61px' }}
                            alt="" /> 
                        <span style={{ position: 'absolute', color: '#FFFFFF',fontWeight: 750, top: '230px', left: '0px', width: '61px' }}>1</span>
                        <img
                            src={star2}
                            style={{ position: 'absolute', top: '340px', left: '20px', width: '16px' }}
                            alt="" />
                        <img
                            src={star3}
                            style={{ position: 'absolute', top: '410px', left: '75px', width: '16px' }}
                            alt="" />
                        <img
                            src={star4}
                            style={{ position: 'absolute', top: '450px', left: '140px', width: '16px' }}
                            alt="" />
                        <img
                            src={star5}
                            style={{ position: 'absolute', top: '465px', left: '230px', width: '16px' }}
                            alt="" />
                        <img
                            src={star6}
                            style={{ position: 'absolute', top: '445px', left: '310px', width: '16px' }}
                            alt="" />
                        <img
                            src={star7}
                            style={{ position: 'absolute', top: '400px', left: '375px', width: '16px' }}
                            alt="" />
                    </div>
                    <div>
                        <div>
                            <h1 style={{display: 'inline', fontSize: '32px'}}>Day 1- Class</h1>
                            <button style={{display: 'inline', marginRight: '20px'}}>
                                <img src={btnLeft} alt="" />
                            </button>
                            <button style={{display: 'inline'}}>
                                <img src={btnRight} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
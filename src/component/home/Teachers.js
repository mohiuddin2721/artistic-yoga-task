import React from 'react';
import livePick from '../../assets/Ellipse 4.png';
import backRac from '../../assets/Rectangle-1.png';
import ashrei from '../../assets/Ashrei-1.png';
import btnLeft from '../../assets/Polygon-1.png';
import btnRight from '../../assets/Polygon-2.png';

const Teachers = () => {
    const teachersName = ['Ashrei Mitra', 'Rahul', 'Ashreil Mitra', 'Ashray', 'Ashish', 'Zora']
    return (
        <div style={{ backgroundColor: '#fdf8f4', height: '700px' }}>
            <div style={{ width: '1128px' }} className='mx-auto'>
                <h1 style={{ fontSize: '36px', color: '#000000' }}>Our Teachers</h1>
                <div className='grid grid-cols-3 gap-2 mt-12'>
                    <div style={{ position: 'relative' }}>
                        {
                            teachersName.map(name =>
                                <p style={{ color: '#8C8C8C', fontSize: '22px', marginTop: '45px' }}>{name}</p>)
                        }
                        <span>
                            <img
                                src={livePick}
                                style={{ width: '16px', position: 'absolute', left: '-30px', top: '210px' }}
                                alt="" />
                        </span>
                    </div>
                    <div style={{ backgroundColor: '#ede9e6' }} className='col-span-2'>
                        <div style={{ position: 'relative', borderRadius: '16px' }} className='grid grid-cols-2'>
                            <div>
                                <img
                                    src={backRac}
                                    style={{ width: '206px', position: 'absolute', left: '32px', top: '55px' }}
                                    alt="" />
                                <img
                                    src={ashrei}
                                    style={{ width: '226px', position: 'absolute', left: '0px', top: '-30px' }}
                                    className='rounded'
                                    alt="" />
                            </div>
                            <div className='col-span-2' style={{ position: 'relative' }}>
                                <p style={{ position: 'absolute', left: '260px', top: '81px', color: '#4D4D4D' }}>
                                    Ashrei Mitra started his journey in yoga at the age of 16.
                                    He was chosen by his master Dr. Bharat Thakur from a
                                    meditation workshop and has worked with him closely for many years to become one
                                    of the most senior teachers at Bharat Thakur Artistic Yoga. Combining his
                                    love of fitness, breathwork, functional training, and his deep knowledge of the
                                    human anatomy and yogic knowhow, he is committed to maximizing on the human potential by strengthening and
                                    opening up the body so that the mind naturally falls into a deep state of relaxation and meditation.
                                    He has taught yoga to people from all walks of life including athletes, celebrities and
                                    several top corporate organizations.
                                </p>
                            </div>
                        </div>
                        <div style={{position: 'relative'}}>
                            <p style={{position: 'absolute', left: '430px', top: '470px'}}>
                                <button style={{ display: 'inline', marginRight: '20px', width: '35px', marginTop: '20px', marginLeft: '210px' }}>
                                    <img src={btnLeft} alt="" />
                                </button>
                                <button style={{ display: 'inline', width: '35px', marginTop: '20px' }}>
                                    <img src={btnRight} alt="" />
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teachers;
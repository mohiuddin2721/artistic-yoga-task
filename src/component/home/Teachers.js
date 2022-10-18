import React from 'react';
import livePick from '../../assets/Ellipse 4.png';
import backRac from '../../assets/Rectangle-1.png';
import ashrei from '../../assets/Ashrei-1.png';

const Teachers = () => {
    const teachersName = ['Ashrei Mitra', 'Rahul', 'Ashreil Mitra', 'Ashray', 'Ashish', 'Zora']
    return (
        <div style={{ backgroundColor: '#fdf8f4', height: '700px' }}>
            <div style={{ width: '1128px' }} className='mx-auto'>
                <h1 style={{fontSize: '36px', color: '#000000'}}>Our Teachers</h1>
                <div className='grid grid-cols-3 gap-2'>
                    <div style={{position: 'relative'}}>
                        {
                            teachersName.map(name => 
                            <p style={{color: '#8C8C8C', fontSize: '22px', marginTop: '45px'}}>{name}</p>)
                        }
                        <span>
                            <img 
                            src={livePick} 
                            style={{width: '16px', position: 'absolute', left: '-30px', top: '210px'}}
                            alt="" />
                        </span>
                    </div>
                    <div className='col-span-2'>
                        <div style={{position: 'relative'}} className='grid grid-cols-2'>
                            <div>
                                <img 
                                src={backRac} 
                                style={{width: ''}}
                                alt="" />
                                <img 
                                src={ashrei} 
                                alt="" />
                            </div>
                            <div className='col-span-2'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teachers;
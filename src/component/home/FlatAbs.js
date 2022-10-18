import React from 'react';
import './FlatAbs.css';
import bgImage from '../../assets/floral-1.png';
import videoImage from '../../assets/video-1.png';
import polygon from '../../assets/poligon-3.png';

const FlatAbs = () => {
    return (
        <div style={{ position: 'relative', backgroundColor: '#fdf8f4'}}>
            <img 
            src={bgImage} 
            style={{position: 'absolute', transform: 'rotate(180deg)', right: 0, height: '600px'}}
            alt="" />
            <div style={{ width: '1128px' }} className='mx-auto'>
                <div style={{ color: '#000000' }}>
                    <h1 style={{ fontFamily: 'Avenir LT Std' }} className='pt-[67px] text-[36px] mb-0 pb-0'>Yoga for Flat Abs</h1>
                    <p style={{ height: '22px' }} className='mt-0 pb-0'>90 Days program</p>
                </div>
                <div style={{ marginTop: '25px' }} className='grid grid-cols-2 gap-16'>
                    <div style={{ position: 'relative' }}>
                        <img src={videoImage} className='flatAbs-video' alt="" />
                        <img src={polygon} className='flatAbs-video-btn' alt="" />
                    </div>
                    <div className='pl-12'>
                        <h1 style={{ fontSize: '22.78px' }}>
                            <span style={{ borderBottom: '3px solid #FE5266' }} className='text-[#FE5266]'>Details</span>
                            <span className='text-[#4D4D4D] ml-[65px]'>Techniques</span>
                        </h1>
                        <p style={{width: '355px', fontSize: '20px', color: '#000000', marginTop: '26px'}}>
                            Choose a quiet space so that you can do the session uninterrupted. 
                            Make sure there is at least 2 hours gap between a meal and the class. 
                            Put all other devices aside and enjoy the session.
                        </p>
                        <p style={{marginTop: '80px', fontWeight: '750', fontSize: '18px', color: '#FE5266'}}>AED 99/-</p>
                        <div>
                            <button style={{marginTop: '43px', marginBottom: '40px', marginRight: '18px', color: '#FFFFFF', padding: '12px 30px', background: 'linear-gradient(90.19deg, #F24397 0.17%, #F64C3B 105.5%)', borderRadius: '50px'}}>Join now </button>
                            <button style={{marginTop: '43px', marginBottom: '40px', marginRight: '18px', color: '#FE5266', padding: '12px 30px', border: '1px solid #FE5266', borderRadius: '50px'}}>View Schedule</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlatAbs;
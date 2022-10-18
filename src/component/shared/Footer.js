import React from 'react';
import './Footer.css';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import messageIcon from '../../assets/Vector1.png';
import whatsapp from '../../assets/whatsapp-1.png';

const Footer = () => {

    return (
        <div className='footer-container'>
            <div className='footer-section'>
                <div style={{ width: '1062px' }} className='grid grid-cols-2 gap-4 mx-auto'>
                    <div>
                        <h1
                            style={{ fontFamily: 'Avenir LT Std', fontStyle: 'normal', fontWeight: 300, fontSize: '28.83px', lineHeight: '35px', marginTop: '40px' }}>
                            Let's talk
                        </h1>
                        <h1
                            style={{ fontFamily: 'Avenir LT Std', fontStyle: 'normal', fontWeight: '300', fontSize: '36.49px', lineHeight: '44px', marginTop: '16px', marginBottom: '16px' }}>
                            Book an appointment?
                        </h1>
                    </div>
                    <div>
                        <p style={{ marginBottom: '37px', marginTop: '42px' }} className='text-right footer-email'>
                            someone@example.com
                            <span className='inline'>
                                <img
                                    src={messageIcon}
                                    style={{ display: 'inline', marginLeft: '25px' }}
                                    alt="" />
                            </span>
                        </p>
                        <p style={{ marginBottom: '17px' }} className='text-right footer-number'>
                            +91- 385 526 5060
                            <span className='inline'>
                                <img
                                    src={whatsapp}
                                    style={{ display: 'inline', marginLeft: '25px' }}
                                    alt="" />
                            </span>
                        </p>
                    </div>
                </div>
                <hr style={{ width: '1062px', border: '1px solid #000000' }} className='mx-auto' />
                <div style={{ width: '1062px' }} className='mx-auto'>
                    <p style={{width: '521px', marginTop: '16px', fontFamily: 'Avenir LT Std', fontStyle: 'normal', fontWeight: '300', fontSize: '18px', lineHeight: '156.5%'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aenean vitae facilisis lorem. Integer non pharetra mauris, 
                        non tincidunt metus. Aenean in lectus diam... 
                    </p>
                </div>
            </div>
            <div className='footer-end-section'>
                <p className='text-center pt-8'>
                    <AiOutlineCopyrightCircle className='inline' />
                    2021 Copyright - Artistic yoga
                    <BsDot className='text-2xl inline' />
                    Privacy policy
                    <BsDot className='text-2xl inline' />
                    Terms of use
                </p>
            </div>
        </div>
    );
};

export default Footer;
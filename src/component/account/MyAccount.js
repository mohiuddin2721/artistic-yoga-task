import React from 'react';
import myPic from '../../assets/Ellipse-profile.png';
import ellips from '../../assets/Ellipse-1.png';
import vector from '../../assets/Vector.png';
import bgImage from '../../assets/floral-1.png';

const MyAccount = () => {
    return (
        <div style={{ backgroundColor: '#fdf8f4', height: '1300px' }}>
            <img
                src={bgImage}
                style={{ position: 'absolute', left: 0, top: '600px', height: '700px' }}
                alt="" />
            <div style={{ position: 'relative', width: '1128px' }} className='mx-auto'>
                <div>
                    <h1 className='text-center pt-[90px] text-[74px] font-bold mb-8 text-[#000000]'>My <span className='text-[#f24581]'>ACCOUNT</span></h1>
                    <img
                        src={myPic}
                        style={{ position: 'absolute', left: '450px', top: '220px', width: '200px' }}
                        alt="" />
                    <img
                        src={ellips}
                        style={{ position: 'absolute', left: '595px', top: '360px', width: '50px' }}
                        alt="" />
                    <img
                        src={vector}
                        style={{ position: 'absolute', left: '595px', top: '240px', width: '30px' }}
                        alt="" />
                </div>
                <div style={{ position: 'absolute', top: '500px' }}>
                    <div style={{ margin: '5px 30px' }}>
                        <label
                            className='text-[25px] text-[#00000084] font-bold'>
                            Name
                        </label> <br />
                        <input
                            value={'Arjun G N'}
                            className='bg-[#fdf8f4] w-[900px] text-[28px] text-[#000000]'
                            type="text" />
                        <span
                            style={{ borderBottom: '1px solid #f24581', right: '0' }}
                            className='text-[#f24581] text-[25px]'>
                            Edit
                        </span>
                    </div>
                    <div style={{ margin: '5px 30px' }}>
                        <label
                            className='text-[25px] text-[#00000084] font-bold'>
                            Email
                        </label> <br />
                        <input
                            value={'Arjun@gmail.com'}
                            className='bg-[#fdf8f4] w-[900px] text-[28px] text-[#000000]'
                            type="text" />
                        <span
                            style={{ borderBottom: '1px solid #f24581', right: '0' }}
                            className='text-[#f24581] text-[25px]'>
                            Edit
                        </span>
                    </div>
                    <div style={{ margin: '5px 30px' }}>
                        <label
                            className='text-[25px] text-[#00000084] font-bold'>
                            Phone
                        </label> <br />
                        <input
                            value={'982669270'}
                            className='bg-[#fdf8f4] w-[900px] text-[28px] text-[#000000]'
                            type="text" />
                        <span
                            style={{ borderBottom: '1px solid #f24581', right: '0' }}
                            className='text-[#f24581] text-[25px]'>
                            Edit
                        </span>
                    </div>
                    <div style={{ margin: '5px 30px' }}>
                        <label
                            className='text-[25px] text-[#00000084] font-bold'>
                            Password
                        </label> <br />
                        <input
                            value={''}
                            className='bg-[#fdf8f4] w-[745px] text-[28px] text-[#000000]'
                            type="text" />
                        <span
                            style={{ borderBottom: '1px solid #f24581', right: '0' }}
                            className='text-[#f24581] text-[25px]'>
                            Change password
                        </span>
                    </div>
                    <div style={{ margin: '5px 30px' }}>
                        <label
                            className='text-[25px] text-[#00000084] font-bold'>
                            Subscription Details
                        </label>
                    </div>
                    <div style={{ margin: '5px 30px' }}>
                        <label
                            className='text-[28px] text-[#000000]'>
                            1 Year membership for 750 AED
                        </label>
                        <p className='text-[25px] text-[#00000084]'>
                            Started on: 13-11-2020
                            <br />
                            Valid till: 13-11-2021
                        </p>
                        <a 
                        className='text-[25px] text-[#00000084]'
                        href="">
                            Subscription history
                        </a>
                        <span
                            style={{ borderBottom: '1px solid #f24581', right: '0' }}
                            className='text-[#f24581] text-[25px] ml-[590px]'>
                            Change plan
                        </span>
                    </div>
                    <div style={{ margin: '5px 30px' }}>
                        <label
                            className='text-[28px] text-[#000000]'>
                            Referral Details
                        </label>
                        <p className='text-[25px] text-[#00000084]'>
                            Share your referral code and earn cash credits for each friend that subscribes. (1 
                            <br />
                            Friend = 5 USD/16 DHRM). Also, your friend receives a 5 USD credit.
                        </p>
                        <p className='text-[28px] mt-5 text-[#00000084]'>
                        Referral Code: HSAGBWBDAV
                        </p>
                        <a 
                        className='text-[28px] text-[#00000084]'
                        href="">
                            Referral History
                        </a>
                        <span
                            style={{ borderBottom: '1px solid #f24581', right: '0' }}
                            className='text-[#f24581] text-[25px] ml-[690px]'>
                            Copy
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;
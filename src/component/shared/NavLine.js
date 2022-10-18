import React from 'react';
import { Link } from 'react-router-dom';
import ayLogo from "../../assets/AY-logo.png";
import elips2 from "../../assets/Ellipse-2.png";
import './NavLine.css';

const NavLine = () => {
    return (
        <div className="navbar back-color">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case main-logo">
                    <img src={ayLogo} alt="" />
                </a>
            </div>
            <div className="flex-none nav-content">
                <Link to={'/About-Us'} className='nav-about'><a>About Us</a></Link>
                <Link to={'/Our-Programs'} className='nav-programs'><a>Our Programs</a></Link>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={elips2} alt='' />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <Link to={'/Dashboard'} className='nav-tag'><a>Dashboard</a></Link>
                    <Link to={'/Bookmarks'} className='nav-tag'><a>Bookmarks</a></Link>
                    <Link to={'/My-Account'} className='nav-tag'><a>My Account</a></Link>
                    <Link to={'/LogIn'} className='nav-log'><a>LogIn</a></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavLine;
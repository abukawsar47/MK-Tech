import React from 'react';

const Navbar = () => {
    const menuItems = <>
        <li className='mx-2 uppercase font-bold focus-within:text-primary'><a href="#">Home</a></li>
        <li className='mx-2 uppercase font-bold focus-within:text-primary'><a href="#">ADVERTISERS</a></li>
        <li className='mx-2 uppercase font-bold focus-within:text-primary'><a href="#">PUBLISHERS</a></li>
        <li className='mx-2 uppercase font-bold focus-within:text-primary'><a href="#">INFLUENCERS</a></li>
        <li className='mx-2 uppercase font-bold focus-within:text-primary'><a href="#"> AD FORMATS</a></li>
        <li className='mx-2 uppercase font-bold focus-within:text-primary'><a href="#">BLOG</a></li>
        <li className='mx-2 uppercase font-bold focus-within:text-primary'><a href="#">CONTACT US </a></li>


    </>
    return (
        <div>
            <div className="nav-top">
                <div className="navbar">
                    <div className="flex-1">
                        <a className="btn btn-ghost uppercase font-bold text-2xl p-0">LOGO</a>
                    </div>
                    <div className="">
                        <li className='mx-2 uppercase font-bold focus-within:text-success list-none'><a href="#">Bn</a></li>
                        /
                        <li className='mx-2 uppercase font-bold focus-within:text-success list-none'><a href="#">En</a></li>
                    </div>
                </div>
            </div>
            <div className="nav-bottom">
                <div className='lg:flex min-w-fit'>
                    <div className="navbar-start flex-1">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItems}
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-start hidden lg:flex min-w-fit">
                        <ul className="menu menu-horizontal p-0">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="navbar-end text-right">
                        <button className='btn bg-white text-neutral hover:text-white rounded-3xl '>Login <span className='btn btn-sm btn-primary text-white rounded-3xl ml-4'>Sign UP</span></button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
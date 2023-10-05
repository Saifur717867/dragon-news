import React from 'react';
import { NavLink } from 'react-router-dom';
import LogIn from '../../pages/login/LogIn';

const Navbar = () => {
    const navLink = <>
        <li className='list-none'><NavLink to={'/'}>Home</NavLink></li>
        <li className='list-none'><NavLink to={'/about'}>About</NavLink></li>
        <li className='list-none'><NavLink to={'/career'}>Career</NavLink></li>
    </>
    return (
        <div className='flex justify-between items-center mt-4 mb-16 ml-[44%]'>
            <div className='flex justify-center items-center gap-6'>
                {navLink}
            </div>
            <div className='flex justify-end items-center'>
                <img className='w-[30px] mr-2' src="/images/user.png" alt="" />
                <button className='py-1 px-6 rounded text-white bg-slate-500'>Log In</button>
            </div>
        </div>
    );
};

export default Navbar;
import { FaShopify } from "react-icons/fa";
import { BsSearchHeart } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </>
    return (
        <div className='bg-white'>
            <div className="navbar bg-base-100 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    {/* //logo */}
                    <div className=''>
                        <img src="../../../public/Group 1.png" alt="" />
                        <p className='font-open font-bold text-xl text-[#444]'>Car Enginers</p>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-10 text-lg font-semibold font-inter text-[#444]">
                        {links}
                    </ul>
                </div>


                <div className="navbar-end space-x-7">
                    <FaShopify className="text-2xl" />
                    <BsSearchHeart className="text-2xl" />
                    <a className="btn bg-white text-[#FF3811] text-lg font-semibold font-inter border-2 border-[#FF3811]">Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
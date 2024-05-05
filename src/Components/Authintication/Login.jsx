import React from 'react';
import login from '../../../src/assets/assets/images/login/login.svg'
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img src={login} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl  border-2 border-[#FF3811] p-10">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-base font-semibold font-inter">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered bg-white border-[#FF3811]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-base font-semibold font-inter">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered border-[#FF3811]" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white font-bold">Sign In</button>
                        </div>
                        <div className="divider">OR</div>
                        <div className='mx-auto space-x-5'>
                            <button className='btn btn-circle text-xl'><FaFacebook /></button>
                            <button className='btn btn-circle text-xl'><FaLinkedin /></button>
                            <button className='btn btn-circle text-xl'><FaGoogle /></button>
                        </div>
                        <p className='text-[#737373] text-center'>New user <Link to="/rejister" className='text-[#FF3811] font-bold font-inter'> Rejister</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
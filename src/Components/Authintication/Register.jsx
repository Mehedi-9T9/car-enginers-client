import React from 'react';
import login from '../../../src/assets/assets/images/login/login.svg'
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img src={login} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl  border-2 border-[#FF3811] p-10">
                    <h1 className="text-5xl font-bold text-center">Rejister now!</h1>
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
                            <input type="password" placeholder="Password" className="input input-bordered bg-white border-[#FF3811]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-base font-semibold font-inter">Conform Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered bg-white border-[#FF3811]" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white font-bold">Sign Up</button>
                        </div>


                        <p className='text-[#737373] text-center'>Have an account <Link to="/login" className='text-[#FF3811] font-bold font-inter'> Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
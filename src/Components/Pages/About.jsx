import React from 'react';
import person from '../../assets/assets/images/about_us/person.jpg'
import parts from '../../assets/assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row gap-x-20">
                <div className='w-1/2 relative'>
                    <img src={person} className=" rounded-lg shadow-2xl" />
                    <div className='border-8 border-white w-[350px] absolute -right-10 top-1/2 rounded-xl'>
                        <img src={parts} className=" w-full   shadow-2xl " />
                    </div>
                </div>
                <div className='w-1/2'>
                    <p className='text-xl font-bold text-[#FF3811] font-inter'>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. .</p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] mt-5 text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
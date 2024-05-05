import React from 'react';
import { FaBusinessTime } from "react-icons/fa6";
import { TbPhoneCalling } from "react-icons/tb";
import { FaSearchLocation } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='bg-[#010101] my-10 p-10 grid grid-cols-3 container mx-auto rounded-xl'>
            <div className='flex items-center gap-4'>
                <FaBusinessTime className='text-[#FF3811] text-5xl' />
                <div>
                    <p className='text-base text-white font-semibold'>We are open monday-friday</p>
                    <h3 className='text-2xl font-bold text-white'>7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <TbPhoneCalling className='text-[#FF3811] text-5xl' />
                <div>
                    <p className='text-base text-white font-semibold'>We are open monday-friday</p>
                    <h3 className='text-2xl font-bold text-white'>7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <FaSearchLocation className='text-[#FF3811] text-5xl' />
                <div>
                    <p className='text-base text-white font-semibold'>We are open monday-friday</p>
                    <h3 className='text-2xl font-bold text-white'>7:00 am - 9:00 pm</h3>
                </div>
            </div>
        </div>
    );
};

export default Contact;
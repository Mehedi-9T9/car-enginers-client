import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
    const { title, price, img } = service
    return (

        <div className="card w-96 bg-base-100 shadow-xl border">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title font-inter font-bold text-2xl">{title}</h2>

                <div className="card-actions flex items-center justify-between">
                    <p className='text-xl font-semibold font-inter text-[#FF3811]'>Price : $ {price}</p>
                    <button className="btn bg-base-100 text-[#FF3811] border-none"><FaLongArrowAltRight /></button>
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;
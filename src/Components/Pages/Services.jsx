import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
// import services from '../../../public/services.json'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);
    return (
        <div className='container mx-auto space-y-5'>
            <p className='text-[#FF3811] text-center font-bold'>Services</p>
            <h2 className='text-center text-5xl font-bold text-black'>Our Service Area</h2>
            <p className='mx-auto text-center w-[700px]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='md:grid grid-cols-3 gap-5 mt-20'>
                {
                    services?.map(service => <ServiceCard key={services._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='text-center my-10'>
                <button className='text-xl text-center mx-auto btn  border-2 border-[#FF3811] text-[#FF3811] font-semibold'>More Services</button>
            </div>

        </div>
    );
};

export default Services;
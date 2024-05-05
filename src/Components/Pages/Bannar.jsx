import React from 'react';
import img1 from '../../../src/assets/assets/images/banner/5.jpg'
import img2 from '../../../src/assets/assets/images/banner/2.jpg'
import img3 from '../../../src/assets/assets/images/banner/3.jpg'
import img4 from '../../../src/assets/assets/images/banner/4.jpg'

const Bannar = () => {
    return (
        <div className='container mx-auto'>
            <div className="carousel rounded-xl h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />

                    <div className="pt-40 pl-20 absolute text-white    bg-gradient-to-r from-[#151515] h-full space-y-3">
                        <h2 className='text-white text-5xl font-bold font-inter'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p>There are many variations of passages of  available, but <br />the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <button className='btn bg-[#FF3811] rounded-md text-white'>Discover More</button>
                            <button className='btn btn-outline text-white'>Latest Project</button>
                        </div>

                    </div>


                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-5">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-5">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-5">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-5">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;
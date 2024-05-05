import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#151515] '>
            <footer className="footer p-10  container mx-auto text-white">
                <aside>
                    <div>
                        <img src="../../../public/Group 1.png" alt="" />
                        <p className='text-center'>Car Enginers</p>
                    </div>
                    <p>Edwin Diaz is a software and <br /> web technologies engineer, <br /> a life coach trainer who is also a serial .</p>
                </aside>
                <nav>
                    <h6 className="footer-title">About</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">Contact</a>

                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">Why Car Enginers</a>
                    <a className="link link-hover">About</a>

                </nav>
                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Support Center</a>
                    <a className="link link-hover">Feedback</a>
                    <a className="link link-hover">Accessibility</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
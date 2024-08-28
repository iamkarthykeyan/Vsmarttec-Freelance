import React from 'react';
import BookCall from './BookCall';

const Footer = () => {
  return (
    <>
      <BookCall />
      <footer className="w-full px-6 py-8 flex flex-col md:flex-row justify-between items-start text-white font-poppins">
        <div className="relative w-full md:w-[38%] p-6 border border-gray-300 rounded-lg mb-6 md:mb-0 h-full md:mr-4 bg-black overflow-hidden">
          <video className="absolute top-0 left-0 w-full h-full object-cover">
            <source src="https://cdn.prod.website-files.com/66917f970aa31c65959816ce%2F6691813bb8a59b7a8a0f1b53_Neon-Glow-Abstract-Geometric-Design-2024-02-20-16-41-14-Utc-transcode.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-normal mb-44">Aspectify Design<span className='text-blue-500'>.</span></h2>
            <p className="text-white text-base">
              We're a UK based Webflow design agency focused on empowering startups, B2B, and fintech companies with an impactful online presence.
              We deliver high-quality, converting websites with impressive turnaround times.
            </p>
          </div>
        </div>




        <div className="w-full md:w-[60%] flex flex-col md:flex-col justify-between p-6 border border-gray-300 rounded-lg h-full bg-black">
          <div className="flex flex-col md:flex-row justify-around w-full">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Quick links</h3>
              <ul className="text-gray-400 space-y-2">
                <li className='hover:text-white cursor-pointer' >Home</li>
                <li className='hover:text-white cursor-pointer' >Services</li>
                <li className='hover:text-white cursor-pointer' >About us</li>
                <li className='hover:text-white cursor-pointer'  >Projects</li>
                <li className='hover:text-white cursor-pointer' >Contact</li>
              </ul>
            </div>

            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Our services</h3>
              <ul className="text-gray-400 space-y-2">
                <li className='hover:text-white cursor-pointer' >Webflow development</li>
                <li className='hover:text-white cursor-pointer' >Web design</li>
                <li className='hover:text-white cursor-pointer' >Figma to Webflow</li>
                <li className='hover:text-white cursor-pointer' >WordPress to Webflow</li>
                <li className='hover:text-white cursor-pointer' >Branding</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="text-gray-400 space-y-2">
                <li className='hover:text-white cursor-pointer'>hello@aspectify.design</li>
                <li className='hover:text-white cursor-pointer'>+40 723 646 820</li>
                <li className='hover:text-white cursor-pointer'>Book a free discovery call</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-600 pt-4 w-full flex flex-col justify-between items-center gap-5 md:flex-row lg:flex-row">
            <p className="text-xs font-semibold">&copy; Aspectify Design.<span className='text-gray-400'>All rights reserved.</span></p>
            <div className="flex space-x-4">
              <a href="#" className="text-xs hover:underline text-gray-400">Privacy Policy</a>
              <a href="#" className="text-xs hover:underline text-gray-400">Terms & Conditions</a>
            </div>
            <div className='text-5xl'>
              <span className="text-5xl font-medium bg-text-fade-left-right text-gradient bg-clip-text">2020</span> - 24
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

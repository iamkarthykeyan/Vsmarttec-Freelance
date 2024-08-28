import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const YourComponent = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Set up the animation
  React.useLayoutEffect(() => {
    gsap.from(".text-slide-in", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".text-slide-in", 
        start: "top 80%", 
      },
    });
  }, []);

  return (
    <div className="bg-black text-white p-6 md:p-10 lg:p-20 flex flex-col rounded-lg m-4">
      <div className="flex flex-col lg:flex-row-reverse justify-between items-center">
        <div className="lg:w-1/2">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg" 
            alt="Founders" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 lg:mr-10 mt-8 lg:mt-0">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight text-slide-in">
            Transforming <span className="text-gray-400">startups, B2B,</span> and fintech companies for a digital-driven future.
          </h2>
          <p className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-gray-300 text-slide-in">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur fugit, tempore officia ex amet minus! Laboriosam quisquam commodi cupiditate aspernatur odit ratione! Repellat corporis sequi unde eum vel rem facere!
          </p>
          <button className="mt-6 md:mt-8 bg-white text-black py-2 md:py-3 px-4 md:px-6 rounded-full text-sm md:text-base lg:text-lg font-semibold flex items-center text-slide-in">
            Learn more about us <span className="ml-2">→</span>
          </button>
        </div>
      </div>
      <div className="lg:w-full mt-10 lg:mt-20">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">
          We are proud to be awarded & known by
        </h3>
        <div className="mt-8 md:mt-12 flex justify-center lg:justify-center flex-wrap gap-10 md:gap-40 lg:gap-50">
          <div className="flex flex-col items-center">
            <img src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png" alt="Amazon" className="h-5 md:h-8 lg:h-8"/>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png" alt="Company 2" className="h-5 md:h-8 lg:h-8"/>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png" alt="Company 3" className="h-5 md:h-8 lg:h-8"/>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png" alt="Company 4" className="h-5 md:h-8 lg:h-8"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;

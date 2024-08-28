function ShowcaseSection() {
    return (
<div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-0 px-6 lg:px-16 py-12">
  {/* Left Text Section */}
  <div className="lg:w-2/2 text-center lg:text-left">
    <h2 className="text-4xl lg:text-5xl font-normal text-gray-400 leading-snug">
      Ready to showcase your <br /> values? <span className=" text-black">Let’s start with a conversation.</span>
    </h2>
  </div>
    
        {/* Right Content */}
        <div className="flex flex-col items-center md:items-end md:w-1/2">
          <p className="text-gray-600 text-lg mb-6 text-center md:text-left max-w-lg">
            We’re now taking on new projects for the upcoming months. Schedule a free discovery call or contact us to explore how we can work together to bring your vision to life.
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-4 w-full justify-center">
            <button
              aria-label="Book a free discovery call"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors duration-300"
            >
              Book a free discovery call →
            </button>
            <button
              aria-label="Contact us"
              className="border border-black text-black px-6 py-3 rounded-md font-medium"
            >
              Contact →
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ShowcaseSection;
  
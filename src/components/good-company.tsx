const GoodCompany = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center mt-12 md:mt-24 px-4">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center">
        You're in good company
      </h2>

      {/* Awards Carousel */}
      <div className="mt-10 md:mt-20 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Award 1 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <img
                src="https://resources.roberthalfonline.com/rhcl/images/laurel-left.svg"
                alt="Left decoration"
                className="h-8 md:h-10"
              />
              <div className="flex flex-col items-center mx-2">
                <p className="text-base md:text-lg font-bold text-center">
                  Fortune® World's Most Admired Companies™
                </p>
                <p className="mt-2 text-sm md:text-base">2025</p>
              </div>
              <img
                src="https://resources.roberthalfonline.com/rhcl/images/laurel-right.svg"
                alt="Right decoration"
                className="h-8 md:h-10"
              />
            </div>
          </div>

          {/* Award 2 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <img
                src="https://resources.roberthalfonline.com/rhcl/images/laurel-left.svg"
                alt="Left decoration"
                className="h-8 md:h-10"
              />
              <div className="flex flex-col items-center mx-2">
                <p className="text-base md:text-lg font-bold text-center">
                  Forbes' America's Best Professional Recruiting Firms
                </p>
                <p className="mt-2 text-sm md:text-base">2025</p>
              </div>
              <img
                src="https://resources.roberthalfonline.com/rhcl/images/laurel-right.svg"
                alt="Right decoration"
                className="h-8 md:h-10"
              />
            </div>
          </div>

          {/* Award 3 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <img
                src="https://resources.roberthalfonline.com/rhcl/images/laurel-left.svg"
                alt="Left decoration"
                className="h-8 md:h-10"
              />
              <div className="flex flex-col items-center mx-2">
                <p className="text-base md:text-lg font-bold text-center">
                  Fortune® America's Most Innovative Companies
                </p>
                <p className="mt-2 text-sm md:text-base">2025</p>
              </div>
              <img
                src="https://resources.roberthalfonline.com/rhcl/images/laurel-right.svg"
                alt="Right decoration"
                className="h-8 md:h-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="mt-8 md:mt-12 px-6 py-3 md:px-8 md:py-4 rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors text-sm md:text-base">
        See all accolades
      </button>
    </div>
  );
};

export default GoodCompany;

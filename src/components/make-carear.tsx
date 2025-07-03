import FindImg from "@/assets/img/findimg.webp";
import { Check } from "lucide-react";

const MakeCareer = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center mt-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 py-10 lg:py-20">
        {/* Image Section - First on mobile */}
        <div className="order-1">
          <img
            src={FindImg}
            alt="Career advancement illustration"
            className="rounded-3xl w-full h-auto"
          />
        </div>

        {/* Content Section */}
        <div className="order-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Make the career move you want
          </h2>

          <div className="space-y-4 mt-8 lg:mt-16">
            {/* Benefit 1 */}
            <div className="flex gap-4 items-start">
              <div className="bg-white rounded-lg p-2 w-fit shadow-md flex-shrink-0">
                <Check className="text-red-400" size={20} />
              </div>
              <p className="text-base lg:text-lg">
                Get instant job recommendations tailored to your skills and
                goals
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="flex gap-4 items-start">
              <div className="bg-white rounded-lg p-2 w-fit shadow-md flex-shrink-0">
                <Check className="text-red-400" size={20} />
              </div>
              <p className="text-base lg:text-lg">
                Gain exposure to a range of companies and job types: fully
                remote, hybrid or on-site, and contract or permanent
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="flex gap-4 items-start">
              <div className="bg-white rounded-lg p-2 w-fit shadow-md flex-shrink-0">
                <Check className="text-red-400" size={20} />
              </div>
              <p className="text-base lg:text-lg">
                Access competitive pay, benefits, and free online training and
                development
              </p>
            </div>
          </div>

          {/* Buttons - Stack on mobile, row on desktop */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-16">
            <button className="px-6 py-3 lg:px-8 lg:py-4 rounded-full text-white bg-gray-600 text-base lg:text-lg w-full sm:w-auto">
              Get job matches
            </button>
            <button className="px-6 py-3 lg:px-8 lg:py-4 rounded-full text-gray-600 bg-white text-base lg:text-lg border border-gray-600 w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeCareer;

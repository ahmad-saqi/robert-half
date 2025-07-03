import FindImg from "@/assets/img/findimg.webp";
import { Check } from "lucide-react";

const FindHire = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center mt-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 py-10 lg:py-20">
        {/* Image Section - Now appears first on mobile */}
        <div className="order-1 lg:order-none">
          <img
            src={FindImg}
            alt="Recruitment illustration"
            className="rounded-3xl w-full h-auto"
          />
        </div>

        {/* Content Section */}
        <div className="order-2 lg:order-none">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 lg:mb-0">
            Find your next hire
          </h2>

          <div className="space-y-6 mt-8 lg:mt-16">
            {/* Benefit 1 */}
            <div className="flex gap-4 items-start">
              <div className="bg-white rounded-lg p-2 w-fit shadow-md flex-shrink-0">
                <Check className="text-red-400" size={20} />
              </div>
              <p className="text-base lg:text-lg">
                Preview recruiter-assessed and AI-matched candidates
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="flex gap-4 items-start">
              <div className="bg-white rounded-lg p-2 w-fit shadow-md flex-shrink-0">
                <Check className="text-red-400" size={20} />
              </div>
              <p className="text-base lg:text-lg">
                Book a consultation with one of our recruiters to discuss your
                hiring needs
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="flex gap-4 items-start">
              <div className="bg-white rounded-lg p-2 w-fit shadow-md flex-shrink-0">
                <Check className="text-red-400" size={20} />
              </div>
              <p className="text-base lg:text-lg">
                Get dedicated expert support at every step of the way
              </p>
            </div>
          </div>

          <button className="px-6 py-3 lg:px-8 lg:py-4 rounded-full text-white bg-gray-600 text-base lg:text-lg mt-8 lg:mt-16 w-full sm:w-auto">
            Preview candidates
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindHire;

import FindImg from "@/assets/img/consultimg.webp";
import { Check } from "lucide-react";

const Consulting = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center mt-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 py-10 lg:py-20">
        {/* Content Section - Comes first on mobile */}
        <div className="order-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Consulting solutions to drive business impact
          </h2>

          <div className="space-y-4 mt-8 lg:mt-16">
            {/* Benefit 1 */}
            <div className="flex gap-4 items-start">
              <div className="bg-white rounded-lg p-2 w-fit shadow-md flex-shrink-0">
                <Check className="text-red-400" size={20} />
              </div>
              <p className="text-base lg:text-lg">
                Develop a clear vision and strategy
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="flex gap-4 items-start">
              <div className="bg-white rounded-lg p-2 w-fit shadow-md flex-shrink-0">
                <Check className="text-red-400" size={20} />
              </div>
              <p className="text-base lg:text-lg">
                Enhance business performance with critical technologies and
                processes
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="flex gap-4 items-start">
              <div className="bg-white rounded-lg p-2 w-fit shadow-md flex-shrink-0">
                <Check className="text-red-400" size={20} />
              </div>
              <p className="text-base lg:text-lg">
                Implement a plan or manage operations
              </p>
            </div>
          </div>

          {/* Buttons - Stack vertically on mobile */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-16">
            <button className="px-6 py-3 lg:px-8 lg:py-4 rounded-full text-white bg-gray-600 text-base lg:text-lg w-full sm:w-auto">
              Preview candidates
            </button>
            <button className="px-6 py-3 lg:px-8 lg:py-4 rounded-full text-gray-600 bg-white text-base lg:text-lg border border-gray-600 w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section - Comes second on mobile */}
        <div className="order-2 lg:order-none">
          <img
            src={FindImg}
            alt="Business consulting illustration"
            className="rounded-3xl w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Consulting;

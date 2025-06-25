import FindImg from "@/assets/img/consultimg.webp";
import { Check } from "lucide-react";
const Consulting = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center mt-16 px-4 ">
      <div className="grid grid-cols-2 gap-10 py-20">
        <div>
          <p className="text-5xl">
            Consulting solutions to drive business impact
          </p>
          <div className="flex gap-4 mt-16 items-center">
            <div className="bg-white rounded-lg p-2 w-fit shadow-md">
              <Check className="text-red-400" />
            </div>
            <p className="text-lg">Develop a clear vision and strategy </p>
          </div>
          <div className="flex gap-4 mt-4 items-center">
            <div className="bg-white rounded-lg p-2 w-fit shadow-md">
              <Check className="text-red-400" />
            </div>
            <p className="text-lg">
              Enhance business performance with critical technologies and
              processes
            </p>
          </div>
          <div className="flex gap-4 mt-4 items-center">
            <div className="bg-white rounded-lg p-2 w-fit shadow-md">
              <Check className="text-red-400" />
            </div>
            <p className="text-lg">Implement a plan or manage operations</p>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-4 rounded-full text-white bg-gray-600 text-lg mt-16">
              Preview candidates{" "}
            </button>
            <button className="px-8 py-4 rounded-full text-gray-600 bg-white text-lg border border-gray-600 mt-16">
              Learn More{" "}
            </button>
          </div>
        </div>
        <div>
          <img src={FindImg} alt="" className="rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Consulting;

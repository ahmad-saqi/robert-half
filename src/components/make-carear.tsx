import FindImg from "@/assets/img/findimg.webp";
import { Check } from "lucide-react";
const MakeCarear = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center mt-16 px-4 ">
      <div className="grid grid-cols-2 gap-10 py-20">
        <div>
          <img src={FindImg} alt="" className="rounded-3xl" />
        </div>
        <div>
          <p className="text-5xl">Make the career move you want</p>
          <div className="flex gap-4 mt-16 items-center">
            <div className="bg-white rounded-lg p-2 w-fit shadow-md">
              <Check className="text-red-400" />
            </div>
            <p className="text-lg">
              Get instant job recommendations tailored to your skills and goals
            </p>
          </div>
          <div className="flex gap-4 mt-4 items-center">
            <div className="bg-white rounded-lg p-2 w-fit shadow-md">
              <Check className="text-red-400" />
            </div>
            <p className="text-lg">
              Gain exposure to a range of companies and job types: fully remote,
              hybrid or on-site, and contract or permanent
            </p>
          </div>
          <div className="flex gap-4 mt-4 items-center">
            <div className="bg-white rounded-lg p-2 w-fit shadow-md">
              <Check className="text-red-400" />
            </div>
            <p className="text-lg">
              Access competitive pay, benefits, and free online training and
              development
            </p>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-4 rounded-full text-white bg-gray-600 text-lg mt-16">
              Get job matches
            </button>
            <button className="px-8 py-4 rounded-full text-gray-600 bg-white text-lg border border-gray-600 mt-16">
              Learn More{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeCarear;

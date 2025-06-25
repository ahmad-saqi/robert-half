import FindImg from "@/assets/img/findimg.webp";
import { Check } from "lucide-react";
const FindHire = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center mt-16 px-4 ">
      <div className="grid grid-cols-2 gap-10 py-20">
        <div>
          <img src={FindImg} alt="" className="rounded-3xl" />
        </div>
        <div>
          <p className="text-5xl">Find your next hire</p>
          <div className="flex gap-4 mt-16 items-center">
            <div className="bg-white rounded-lg p-2 w-fit shadow-md">
              <Check className="text-red-400" />
            </div>
            <p className="text-lg">
              Preview recruiter-assessed and AI-matched candidates
            </p>
          </div>
          <div className="flex gap-4 mt-4 items-center">
            <div className="bg-white rounded-lg p-2 w-fit shadow-md">
              <Check className="text-red-400" />
            </div>
            <p className="text-lg">
              Book a consultation with one of our recruiters to discuss your
              hiring needs{" "}
            </p>
          </div>
          <div className="flex gap-4 mt-4 items-center">
            <div className="bg-white rounded-lg p-2 w-fit shadow-md">
              <Check className="text-red-400" />
            </div>
            <p className="text-lg">
              Get dedicated expert support at every step of the way
            </p>
          </div>
          <button className="px-8 py-4 rounded-full text-white bg-gray-600 text-lg mt-16">Preview candidates  </button>
        </div>
      </div>
    </div>
  );
}

export default FindHire
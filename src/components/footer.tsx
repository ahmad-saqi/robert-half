import RH from "@/assets/img/RH.svg";
import { ArrowRight, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center py-10 px-4 text-white">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col gap-6 items-start justify-start">
          <img src={RH} alt="" className="size-14" />
          <div className="flex gap-4 items-center">
            <Facebook
              className="bg-white text-gray-600 p-1 rounded-full"
              fill="gray-600"
            />
            <Linkedin
              className="bg-white text-gray-600 p-1 rounded-sm"
              fill="gray-600"
            />
            <Youtube fill="white" className="text-gray-600 size-8" />
            <Instagram />
          </div>
          <div className="flex items-center gap-3">
            <p>Fraud Alert</p>
            <div className="w-0.5 h-5 bg-white"></div>
            <p>Government Notice Terms of Use</p>
            <div className="w-0.5 h-5 bg-white"></div>
            <p>Privacy Notice</p>
            <div className="w-0.5 h-5 bg-white"></div>
            <p>Terms of Use</p>
          </div>
          <p>© 2025 Robert Half Inc.</p>
          <div className="flex flex-col gap-">
            <a href="" className="text-green-400 underline cursor-pointer">
              An Equal Opportunity Employer
            </a>
            <a href="" className="text-green-400 underline cursor-pointer">
              M/F/Disability/Veterans.
            </a>
            <a href="" className="text-green-400 underline cursor-pointer">
              Cookies Settings
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-end justify-center">
          <p className="text-right text-xl font-semibold">
            United States (English)
          </p>
          <button className="flex items-center gap-2 border-2 border-white rounded-full px-8 h-16 text-lg font-semibold"> Select a region and language <ArrowRight/></button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

const ServicesTable: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center mt-16 px-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-20 text-white">
        <div className="flex flex-col items-start justify-start gap-6">
          <p className="text-2xl font-semibold">Services</p>
          <button className="cursor-pointer hover:underline">
            Browse Jobs
          </button>
          <button className="cursor-pointer hover:underline">
            Contract Talent
          </button>
          <button className="cursor-pointer hover:underline">
            Permanent Talent
          </button>
          <button className="cursor-pointer hover:underline">
            Consulting Solutions
          </button>
        </div>
        <div className="flex flex-col items-start justify-start gap-6">
          <p className="text-2xl font-semibold">Areas of Expertise</p>
          <button className="cursor-pointer hover:underline">
            Finance & Accounting
          </button>
          <button className="cursor-pointer hover:underline">Technology</button>
          <button className="cursor-pointer hover:underline">
            Marketing & Creative
          </button>
          <button className="cursor-pointer hover:underline">
            Administrative & Customer Support
          </button>
          <button className="cursor-pointer hover:underline">Legal</button>
        </div>
        <div className="flex flex-col items-start justify-start gap-6">
          <p className="text-2xl font-semibold">Resources & Tools</p>
          <button className="cursor-pointer hover:underline">
            Discover Insights
          </button>
          <button className="cursor-pointer hover:underline">Invoice</button>
          <button className="cursor-pointer hover:underline">
            Job Directory
          </button>
          <button className="cursor-pointer hover:underline">
            Salary Guide
          </button>
          <button className="cursor-pointer hover:underline">
            Time Reports
          </button>
          <button className="cursor-pointer hover:underline">Contact Us</button>
        </div>
        <div className="flex flex-col items-start justify-start gap-6">
          <p className="text-2xl font-semibold">About</p>
          <button className="cursor-pointer hover:underline">
            About Robert Half
          </button>
          <button className="cursor-pointer hover:underline">Leadership</button>
          <button className="cursor-pointer hover:underline">
            Careers With Us
          </button>
          <button className="cursor-pointer hover:underline">Locations</button>
          <button className="cursor-pointer hover:underline">
            Investor Center
          </button>
          <button className="cursor-pointer hover:underline">Press</button>
          <button className="cursor-pointer hover:underline">Our Brands</button>
          <button className="cursor-pointer hover:underline">
            Supplier Relations
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesTable;

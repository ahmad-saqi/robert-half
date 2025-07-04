import { useState } from "react";
import TrendingJobs from "@/assets/img/trendingjobs.webp";

const AddTalent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Finance & Accounting",
      description:
        "From accountants to CFOs, we'll bring you top candidates with in-demand skills and experience and help manage the hiring process for you.",
      trendingJobs: [
        ["Controller", "Internal auditor"],
        ["Senior accountant", "Accounts payable/receivable specialist"],
        ["Senior financial analyst", "Bookkeeper"],
      ],
      cta: "Learn more about our Accounting and Finance hiring solutions →",
    },
    {
      title: "Technology",
      description:
        "Find top tech talent from developers to CTOs with the skills your organization needs to stay competitive.",
      trendingJobs: [
        ["Software Engineer", "Data Scientist"],
        ["DevOps Engineer", "Product Manager"],
        ["UX Designer", "Cybersecurity Specialist"],
      ],
      cta: "Learn more about our Technology hiring solutions →",
    },
    {
      title: "Marketing & Creative",
      description:
        "Discover creative professionals who can elevate your brand and marketing efforts.",
      trendingJobs: [
        ["Digital Marketing Manager", "Graphic Designer"],
        ["Content Strategist", "SEO Specialist"],
        ["Social Media Manager", "Creative Director"],
      ],
      cta: "Learn more about our Marketing & Creative hiring solutions →",
    },
    {
      title: "Legal",
      description:
        "Access qualified legal professionals to support your organization's compliance and legal needs.",
      trendingJobs: [
        ["Corporate Counsel", "Paralegal"],
        ["Contract Manager", "Compliance Officer"],
        ["Intellectual Property Specialist", "Legal Assistant"],
      ],
      cta: "Learn more about our Legal hiring solutions →",
    },
    {
      title: "Administrative & Customer Support",
      description:
        "Find reliable administrative and customer support professionals to keep your operations running smoothly.",
      trendingJobs: [
        ["Executive Assistant", "Office Manager"],
        ["Customer Service Representative", "Receptionist"],
        ["Virtual Assistant", "Data Entry Specialist"],
      ],
      cta: "Learn more about our Administrative hiring solutions →",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-200 rounded-3xl p-6 md:p-10 lg:p-16 mt-10">
      <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
          Add specialized talent across your organization
        </h2>

        {/* Scrollable tabs container */}
        <div className="mb-6 md:mb-8">
          <div className="overflow-x-auto scrollbar-hide whitespace-nowrap scroll-smooth pb-2">
            <div className="inline-flex space-x-4 md:space-x-8">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`py-2 text-base md:text-lg font-medium ${
                    activeTab === index
                      ? "text-black border-b-2 border-black"
                      : "text-gray-600"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 md:mt-20">
          <div className="space-y-6 lg:col-span-2 mb-10 lg:mb-20">
            <p className="text-base md:text-lg">
              {tabs[activeTab].description}
            </p>

            <h3 className="text-lg md:text-xl font-bold">
              Trending job titles
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {tabs[activeTab].trendingJobs.map((jobPair, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-4 md:gap-8"
                >
                  <a className="w-full sm:w-1/2 underline text-green-800 hover:text-green-600">
                    {jobPair[0]}
                  </a>
                  <a className="w-full sm:w-1/2 underline text-green-800 hover:text-green-600">
                    {jobPair[1]}
                  </a>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-block text-green-800 font-medium hover:underline text-base md:text-lg"
            >
              {tabs[activeTab].cta}
            </a>
          </div>

          {/* Images - hidden on mobile, shown on desktop */}
          <div className="hidden lg:flex relative justify-center items-center">
            <img
              src={TrendingJobs}
              alt="Trending jobs illustration"
              className="size-56 rounded-[50px]"
            />
            <img
              src={TrendingJobs}
              alt="Trending jobs illustration"
              className="absolute size-36 rounded-[50px] -right-30 bottom-10"
            />
            <img
              src={TrendingJobs}
              alt="Trending jobs illustration"
              className="absolute size-36 rounded-[50px] -bottom-30 right-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTalent;

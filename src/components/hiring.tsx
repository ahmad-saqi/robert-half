import HiringImg from "@/assets/img/hiring.webp";

const hiringData = [
  {
    id: 1,
    title: "2025 Salary Guide",
    description:
      "Explore the latest data for 450-plus positions and know what you should earn or pay in local and national markets.",
    image: HiringImg,
  },
  {
    id: 2,
    title: "What jobs are in demand?",
    description:
      "Check out our Demand for Skilled Talent report to learn about employers hiring plans and needs",
    image: HiringImg,
  },
  {
    id: 3,
    title: "Navigate tech skills gaps",
    description:
      "Discover strategies for building a comprehensive tech team to support business priorities.",
    image: HiringImg,
  },
  {
    id: 4,
    title: "Multigenerational Workforce Report",
    description:
      "Learn how to better recruit, motivate and retain today's professionals at every age and stage of their careers.",
    image: HiringImg,
  },
];

const Hiring = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center mt-16 px-4">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-8">
        Hiring trends and insights
      </h2>

      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hiringData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hiring;

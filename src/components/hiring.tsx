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
      <p className="text-5xl text-center">Hiring trends and insights</p>

      <div
        className="mt-8 flex gap-8 overflow-x-auto xl:overflow-visible"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {hiringData.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[300px] xl:w-[calc(100%/4-24px)] flex flex-col gap-4"
          >
            <img
              src={item.image}
              alt=""
              className="rounded-2xl w-full h-auto"
            />
            <p className="text-2xl font-semibold text-green-700 truncate">
              {item.title}
            </p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hiring;

import HeroBg from "@/assets/img/hero.png";

const Hero = () => {
  return (
    <div
      className="w-full bg-cover bg-center pt-32 pb-16 md:pt-40 md:pb-20 px-4"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="max-w-screen-xl mx-auto space-y-6 md:space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-xl leading-tight md:leading-normal">
          Anything's possible{" "}
          <span className="text-4xl md:text-6xl font-normal block md:inline">
            when you have the
          </span>{" "}
          talent
        </h1>

        <p className="text-base md:text-lg text-white max-w-xl font-semibold leading-relaxed md:leading-10">
          Find skilled candidates, in-demand jobs and the solutions you need to
          help you do your best work yet.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 md:px-8 md:py-4 rounded-full text-white bg-red-500 font-medium text-sm md:text-base">
            Find a Job
          </button>
          <button className="px-6 py-3 md:px-8 md:py-4 rounded-full text-black bg-white font-medium text-sm md:text-base">
            Hire Talent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

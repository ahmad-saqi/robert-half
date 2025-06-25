import HeroBg from "@/assets/img/hero.png";

const Hero = () => {
  return (
    <div
      className="w-full   bg-cover bg-center pt-40 pb-20"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="max-w-screen-xl mx-auto  space-y-8">
        <h1 className="text-6xl font-bold text-white max-w-xl leading-20">
          Anything’s possible{" "}
          <span className="text-6xl font-normal">when you have the</span> talent
        </h1>

        <p className="mt-4 text-lg text-white max-w-xl font-semibold leading-10">
          Find skilled candidates, in-demand jobs and the solutions you need to
          help you do your best work yet.
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-4 rounded-full text-white bg-red-500">
            Find a Job
          </button>
          <button className="px-8 py-4 rounded-full text-black bg-white">
            Hire Talent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

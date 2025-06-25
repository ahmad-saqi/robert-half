import Consulting from "@/components/consulting"
import FindHire from "@/components/find-hire"
import Hero from "@/components/hero"
import Hiring from "@/components/hiring"
import MakeCarear from "@/components/make-carear"
import Navbar from "@/components/navbar"

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hiring />

      <div className="relative w-full  bg-gradient-to-b from-gray-300 to-transparent ">
        <FindHire />
      </div>
      <div className="relative w-full  bg-gradient-to-b from-amber-100 to-transparent ">
        <Consulting />
      </div>
      <div className="relative w-full  bg-gradient-to-b from-gray-300 to-transparent ">
        <MakeCarear />
      </div>
    </div>
  );
}

export default Landing
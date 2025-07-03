import AddTalent from "@/components/add-talent"
import Consulting from "@/components/consulting"
import FindHire from "@/components/find-hire"
import Footer from "@/components/footer"
import GoodCompany from "@/components/good-company"
import Hero from "@/components/hero"
import Hiring from "@/components/hiring"
import MakeCarear from "@/components/make-carear"
import Navbar from "@/components/navbar"
import ServicesTable from "@/components/services-table"
import Testimonials from "@/components/testimonials"

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
      <AddTalent />
      <Testimonials />
      <GoodCompany />
      <div className="w-full bg-slate-700">
        <ServicesTable />
      </div>
      <div className="w-full bg-gray-600">
        <Footer />
      </div>
    </div>
  );
}

export default Landing
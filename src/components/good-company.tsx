
const GoodCompany = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center mt-24 px-4">
      <p className="text-5xl">You’re in good company</p>
      <div className="mt-20 flex gap-8 overflow-x-auto  xl:overflow-visible">
        <div className="flex h-full gap-4 items-center ">
          <img
            src="https://resources.roberthalfonline.com/rhcl/images/laurel-left.svg"
            alt=""
          />
          <div className="flex flex-col justify-between  items-center h-36">
            <p className="text-lg font-bold text-center">
              Fortune® World's Most Admired Companies™
            </p>
            <p>2025</p>
          </div>
          <img
            src="https://resources.roberthalfonline.com/rhcl/images/laurel-right.svg"
            alt=""
          />
        </div>
        <div className="flex h-full gap-4 items-center">
          <img
            src="https://resources.roberthalfonline.com/rhcl/images/laurel-left.svg"
            alt=""
          />
          <div className="flex flex-col justify-between items-center h-36">
            <p className="text-lg font-bold text-center">
              Forbes' America's Best Professional Recruiting Firms
            </p>
            <p>2025</p>
          </div>
          <img
            src="https://resources.roberthalfonline.com/rhcl/images/laurel-right.svg"
            alt=""
          />
        </div>
        <div className="flex h-full gap-4 items-center">
          <img
            src="https://resources.roberthalfonline.com/rhcl/images/laurel-left.svg"
            alt=""
          />
          <div className="flex flex-col justify-between items-center h-36">
            <p className="text-lg font-bold text-center">
              Fortune® America's Most Innovative Companies
            </p>
            <p>2025</p>
          </div>
          <img
            src="https://resources.roberthalfonline.com/rhcl/images/laurel-right.svg"
            alt=""
          />
        </div>
      </div>
      <button>See all accolades</button>
    </div>
  );
}

export default GoodCompany
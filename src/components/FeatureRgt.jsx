import { PiTruck } from "react-icons/pi";
import StatsCard from "./StatsCard";

const FeatureRgt = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Keep StatsCard positioning untouched */}
      <div>
        <StatsCard />
      </div>

      {/* Main Container */}
      <div className="flex flex-col my-20 lg:flex-row flex-wrap items-center justify-center mx-5 sm:mx-10  lg:mx-18 md:mt-40 sm:mt-40 md:my-16 lg:my-20 gap-10 md:gap-16 lg:gap-20">
        {/* Content Section */}
        <div className="flex flex-col w-full sm:w-4/5 md:w-1/2 lg:w-[35vw] gap-6 text-center lg:text-left">
          {/* Header */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            <PiTruck size={50} color="#0F0B43" className="mx-auto lg:mx-0" />
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-[#0F0B43] leading-tight">
              Freight Forwarding
            </h1>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg font-medium text-gray-700 xl:w-3/4 leading-relaxed">
            Red Sky's freight forwarding team books, tracks and delivers
            end-to-end freight.
          </p>

          {/* List */}
          <ul className="mx-auto lg:mx-0 lg:pl-5 space-y-2 text-gray-400 font-medium text-sm sm:text-base list-disc text-left">
            <li>Ocean freight</li>
            <li>Road freight</li>
            <li>Live in-transit temperature visibility</li>
            <li>Customs clearance</li>
          </ul>

          {/* Button */}
          <button className="mt-4 px-8 py-3 w-fit md:w-1/2 bg-[#0F0B43] text-white font-semibold rounded-2xl hover:bg-[#191368] transition-colors mx-auto lg:mx-0">
            Learn more
          </button>
        </div>

        {/* Image Section */}
        <img
          src="/images/harbourcrane.jpg"
          alt="Harbor crane"
          className="object-cover w-full sm:w-4/5 md:w-3/4 lg:w-1/2 xl:w-[40%] 2xl:w-1/3 rounded-2xl shadow-md"
        />
      </div>
    </section>
  );
};

export default FeatureRgt;

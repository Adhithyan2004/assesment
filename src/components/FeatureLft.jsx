import { TbBrandSpeedtest } from "react-icons/tb";
import TradeFinanceCard from "./TradeFinanceCard";

const FeatureLft = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Keep TradeFinanceCard positioning exactly as you have */}
      <div>
        <TradeFinanceCard />
      </div>

      {/* Main Container */}
      <div
        className="
        flex flex-col-reverse   
        lg:flex-row            
        flex-wrap items-center justify-center 
        mx-5 sm:mx-10 lg:mx-18 
        my-20 sm:mt-40 lg:my-20 
        gap-10 md:gap-16 lg:gap-20
      "
      >
        {/* Image Section */}
        <img
          src="/images/harbor.jpg"
          alt="Harbor view"
          className="object-cover w-full sm:w-4/5 md:w-3/4 lg:w-1/2 xl:w-[40%] 2xl:w-1/3 rounded-2xl shadow-md"
        />

        {/* Content Section */}
        <div className="flex flex-col w-full sm:w-4/5 lg:w-[35vw] lg:gap-4 gap-6 text-center lg:text-left">
          {/* Header */}
          <div className="flex flex-col gap-3 items-center lg:items-start">
            <TbBrandSpeedtest
              size={45}
              color="#0F0B43"
              className="mx-auto md:mx-0"
            />
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-[#0F0B43]">
              Trade Finance
            </h1>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-base font-medium text-gray-700 leading-relaxed">
            Red Sky's trade finance unlocks working capital stuck in your supply
            chain, whilst eliminating credit and FX risks.
          </p>

          {/* List */}
          <ul className="mx-auto lg:mx-0 lg:pl-5 space-y-2 text-gray-400 font-medium text-sm sm:text-base list-disc text-left">
            <li>Suppliers receive 100% advance payments</li>
            <li>Buyers protect and extend payment terms</li>
            <li>$250,000 - $1,000,000 facility sizes</li>
            <li>Fast, flexible finance with minimal paperwork</li>
          </ul>

          {/* Button */}
          <button className="mt-4 px-8 py-3 md:w-1/2 bg-[#0F0B43] text-white font-semibold rounded-2xl hover:bg-[#191368] transition-colors mx-auto lg:mx-0">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureLft;

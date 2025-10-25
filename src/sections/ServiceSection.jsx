import { LuTowerControl } from "react-icons/lu";
import Timeline from "../components/TimeLine";

const ServiceSection = () => {
  return (
    <section className="hidden lg:block">
      <div className="flex flex-col gap-10 lg:my-30 xl:mx-20  xl:my-20">
        <div className="flex flex-col items-center lg:gap-4 gap-6">
          <LuTowerControl
            size={70}
            className="p-2 rounded-lg bg-linear-to-r from-[#FC5252] via-[#FB7B2E]  to-[#FBB910]"
            color="#F9F6EE"
          />
          <p className="text-gray-500">OUR SERVICES</p>
          <h1 className="text-5xl font-bold">Control Tower Platform</h1>
          <p className="w-1/2 text-center">
            Red Sky's software platform directly increases profitability by
            reducing detention & demurrage, automating data entry and improving
            communication across your global supply chain.
          </p>
        </div>
        <Timeline />
        <div className="flex justify-around">
          <button className="rounded-xl Btn">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

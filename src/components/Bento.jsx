import BentoHeader from "./BentoHeader";
import BentoHeaderFeat from "./BentoHeaderFeat";
import BentoOrderCard from "./BentoOrderCard";
import BentoStatsCard from "./BentoStatCard";

const Bento = () => {
  return (
    // CRITICAL: Added 'grid' utility here 👇
    <div className="relative">
      <div className="hidden lg:block">
        <BentoStatsCard />
      </div>
      <BentoOrderCard />
      <div className=" grid grid-cols-12 mx-5 my-8 sm:mx-8 md:mx-10 gap-2 lg:my-20 md:my-20  grid-rows-12 xl:mx-20 lg:h-[96vh] xl:h-[90vh] ">
        {/* box1 */}
        <div className="row-span-6 hidden lg:block rounded-lg lg:col-span-4">
          <BentoHeader />
        </div>

        {/* Box2 */}
        <div className=" rounded-lg lg:col-span-4 col-span-6 row-span-6 lg:row-span-7">
          <video
            src="/videos/farming.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Box3 */}
        <div className="bg-[#EB6651] rounded-lg col-span-4 hidden lg:block row-span-4"></div>

        {/* Box4 */}
        <div className=" rounded-lg lg:col-span-4 col-span-6 row-span-6 lg:row-span-8">
          <video
            src="/videos/cargoship.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Box5 */}
        <div className="lg:row-span-6 row-span-6 col-span-12 bg-orange-400 rounded-lg lg:col-span-4">
          <img
            src="/images/ricefield.jpg"
            alt="RiceField"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Box6 */}
        <div className="bg-[#F9F6EE] rounded-lg col-span-4 hidden lg:block row-span-5 ">
          <BentoHeaderFeat />
        </div>
      </div>
    </div>
  );
};

export default Bento;

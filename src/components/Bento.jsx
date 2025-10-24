import BentoHeader from "./BentoHeader";
import BentoHeaderFeat from "./BentoHeaderFeat";

const Bento = () => {
  return (
    // CRITICAL: Added 'grid' utility here 👇
    <div className="grid grid-cols-12  gap-2 my-30 grid-rows-12 mx-20 h-[90vh] ">
      {/* box1 */}
      <div className="bento row-span-6">
        <BentoHeader />
      </div>

      {/* Box2 */}
      <div className=" bento row-span-7">
        <video
          src="/videos/farming.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Box3 */}
      <div className="bg-[#EB6651] bento row-span-4"></div>

      {/* Box4 */}
      <div className="bg-emerald-400 bento row-span-8">
        <video
          src="/videos/cargoship.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Box5 */}
      <div className="bg-orange-400 bento row-span-6">
        <img
          src="/images/ricefield.jpg"
          alt="Farming"
          loading="lazy"
          className="w-full h-full rounded-lg object-cover"
        />
      </div>

      {/* Box6 */}
      <div className="bg-[#F9F6EE] bento row-span-5 ">
        <BentoHeaderFeat />
      </div>
    </div>
  );
};

export default Bento;

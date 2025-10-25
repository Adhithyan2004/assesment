import { GiShipBow } from "react-icons/gi";

const BentoOrderCard = () => {
  return (
    <div className="absolute top-4/5 left-8 right-8 sm:left-20 sm:right-20 md:left-30 md:right-30 lg:top-13/20 lg:left-28 xl:left-60 2xl:left-80 z-20 bg-[#f7f2e4]  p-4 md:p-6 rounded-2xl shadow-xl flex flex-col gap-3  lg:w-[360px]">
      {/* Avatar + Header */}
      <div className="flex items-center justify-between gap-12">
        <div className="flex items-center gap-2 lg:gap-3">
          {/* Avatar Circle */}
          <div className="w-12 h-12 rounded-full bg-[#FF6B35] flex items-center justify-center">
            {/* Ship Icon */}
            <GiShipBow size={25} color="white" />
          </div>
          <div>
            <h2 className="md:text-lg font-semibold text-gray-900">
              Your Order
            </h2>
          </div>
        </div>

        {/* Status Badge */}
        <span className="text-xs font-semibold bg-[#1E1B4B] text-white px-3 py-1 rounded-full">
          IN TRANSIT
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200 my-1" />

      {/* Stats */}
      <div className="flex justify-between gap-7 ">
        <div>
          <p className="text-gray-500 text-sm font-medium">Quantity</p>
          <p className="md:text-lg font-bold text-gray-900">18,700 Kgs</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm font-medium">Containers</p>
          <p className="md:text-lg font-bold text-gray-900">28</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm font-medium">Arrival</p>
          <p className="md:text-lg font-bold text-gray-900">15 Days</p>
        </div>
      </div>
    </div>
  );
};

export default BentoOrderCard;

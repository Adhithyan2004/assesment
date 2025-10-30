import { PieChart, Pie, Cell } from "recharts";
import { motion } from "framer-motion";

const StatsCard = () => {
  const data = [
    { name: "Ready", value: 60 },
    { name: "Remaining", value: 40 },
  ];

  const COLORS = ["#F4B000", "#EB6651"];

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 20 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.95 }}
      className="absolute left-8 right-8 rounded-3xl justify-center py-4 -bottom-5 flex items-center gap-14 bg-[#F9F6EE] shadow-lg sm:left-30 sm:right-30 sm:justify-between sm:px-6 md:left-40 md:-bottom-10 md:right-40 lg:bottom-13 lg:left-[56vw] lg:shadow-xl lg:w-[400px] xl:left-7/12 xl:w-[420px] 2xl:left-3/5"
    >
      {/* Left Section */}
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-gray-500 text-xs font-medium uppercase">
            Total Produce
          </p>
          <h2 className="text-xl font-bold text-gray-900">24,000 Kgs</h2>
        </div>
        <div>
          <div className="flex gap-3 items-center">
            <div className="w-5 h-5 bg-[#F4B000] rounded-full"></div>
            <p>Ready To Ship</p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-5 h-5 bg-[#EB6651] rounded-full"></div>
            <p>Yet to Ripe</p>
          </div>
        </div>
      </div>
      {/* Right Section - Circular Chart */}
      <div className="relative flex items-center justify-center ">
        <PieChart width={100} height={100}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={35}
            outerRadius={50}
            startAngle={90}
            endAngle={450}
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="none"
              />
            ))}
          </Pie>
        </PieChart>
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-gray-900">60%</span>
          <span className="text-xs text-center text-gray-500">
            Ready to <br /> ship
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;

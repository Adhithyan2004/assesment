import { PieChart, Pie, Cell } from "recharts";
import { FaDollarSign } from "react-icons/fa6";
import { motion } from "framer-motion";
const TradeFinanceCard = () => {
  const data = [
    { name: "Ready", value: 70 },
    { name: "Remaining", value: 30 },
  ];
  const COLORS = ["#0F0B43", "#FDC700"];

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 20 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.95 }}
      className="absolute left-7 right-7 bottom-5 sm:left-30 sm:right-30 md:left-40 lg:bottom-20 md:right-40  xl:bottom-10 xl:left-64 2xl:left-80 lg:shadow-lg flex items-center justify-between bg-[#F9F6EE] rounded-2xl px-4  lg:px-6 lg:py-4 py-3 lg:w-[400px]"
    >
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <div className="bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center text-white text-xl font-bold">
          <FaDollarSign className="text-black w-6 h-6" />
        </div>

        <div>
          <p className="text-xs text-gray-500 font-medium tracking-wide">
            FINANCE
          </p>
          <h2 className="lg:text-xl font-bold text-gray-900">Trade finance</h2>

          <div className="flex items-center gap-6 mt-2">
            <div>
              <p className="text-xs text-gray-500">REQUESTED</p>
              <p className="text-sm font-bold text-gray-900">70%</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">RELEASED IN</p>
              <p className="text-sm font-bold text-gray-900">2 days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Semi Circular Progress */}
      <div>
        <PieChart width={100} height={100}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={0}
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
      </div>
    </motion.div>
  );
};

export default TradeFinanceCard;

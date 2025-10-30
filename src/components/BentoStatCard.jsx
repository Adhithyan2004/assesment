import { motion } from "framer-motion";
import { PieChart, Pie, Cell } from "recharts";

const BentoStatsCard = () => {
  const data = [
    { name: "Ready", value: 60 },
    { name: "Remaining", value: 40 },
  ];
  const COLORS = ["#F4B000", "#EB6651"];

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 80 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
      className="absolute top-7 left-1/2 -translate-x-1/8 bg-[#F9F6EE] backdrop-blur-md shadow-xl py-4 rounded-3xl flex items-center justify-between xl:px-6 lg:px-4 lg:w-[400px] xl:w-[420px]"
    >
      <div>
        <p className="text-gray-500 text-xs font-medium uppercase">
          Total Produce
        </p>
        <h2 className="text-xl font-bold text-gray-900">24,000 Kgs</h2>
      </div>
      <div>
        <p className="text-gray-500 text-xs font-medium uppercase">
          Containers
        </p>
        <h2 className="text-xl font-bold text-gray-900">28</h2>
      </div>

      <div className="relative flex items-center justify-center">
        <PieChart width={100} height={100}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={35}
            outerRadius={50}
            startAngle={90}
            endAngle={450}
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

export default BentoStatsCard;

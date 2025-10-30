import { TbBrandSpeedtest } from "react-icons/tb";
import TradeFinanceCard from "./TradeFinanceCard";
import { motion } from "framer-motion";

const FeatureLft = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.25 },
    },
  };

  // Item animation: fade + slight upward movement
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Floating / decorative card */}
      <div>
        <TradeFinanceCard />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="
          flex flex-col-reverse gap-10
          lg:flex-row            
          flex-wrap items-center justify-center 
          mx-5 sm:mx-10 md:gap-16 lg:mx-18 
          my-20 sm:mt-40 lg:my-20 lg:gap-20
        "
      >
        {/* Left Image Section */}
        <motion.img
          variants={itemVariants}
          src="/images/harbor.jpg"
          alt="Harbor view"
          className="object-cover w-full rounded-2xl shadow-md sm:w-4/5 md:w-3/4 lg:w-1/2 xl:w-[40%] 2xl:w-1/3"
        />

        {/* Right Text Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col w-full gap-6 text-center sm:w-4/5 lg:w-[35vw] lg:gap-4 lg:text-left"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 items-center lg:items-start"
          >
            <TbBrandSpeedtest
              size={45}
              color="#0F0B43"
              className="mx-auto md:mx-0"
            />
            <h1 className="text-3xl font-bold text-[#0F0B43] sm:text-4xl xl:text-5xl">
              Trade Finance
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base font-medium text-gray-700 leading-relaxed sm:text-lg lg:text-base"
          >
            Red Sky's trade finance unlocks working capital stuck in your supply
            chain, whilst eliminating credit and FX risks.
          </motion.p>

          {/* Bullet List */}
          <motion.ul
            variants={itemVariants}
            className="mx-auto space-y-2 text-gray-400 font-medium text-sm list-disc text-left sm:text-base lg:mx-0 lg:pl-5"
          >
            <li>Suppliers receive 100% advance payments</li>
            <li>Buyers protect and extend payment terms</li>
            <li>$250,000 - $1,000,000 facility sizes</li>
            <li>Fast, flexible finance with minimal paperwork</li>
          </motion.ul>

          {/* CTA Button */}
          <motion.button
            variants={itemVariants}
            className="mt-4 px-8 py-3 bg-[#0F0B43] text-white font-semibold rounded-2xl hover:bg-[#191368] transition-colors mx-auto md:w-1/2 lg:mx-0"
          >
            Learn more
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeatureLft;

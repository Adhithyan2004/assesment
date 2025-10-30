import { PiTruck } from "react-icons/pi";
import StatsCard from "./StatsCard";
import { motion } from "framer-motion";

const FeatureRgt = () => {
  // Container animation: triggers child stagger
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.25 },
    },
  };

  // Individual element animation
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full lg:overflow-hidden">
      {/* Floating / decorative StatsCard */}
      <div>
        <StatsCard />
      </div>

      {/* Main Animated Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="
          flex flex-col my-20 flex-wrap items-center justify-center mx-5 gap-10 
          lg:flex-row  
          sm:mx-10 sm:mt-40  
          md:mt-40  md:my-16 md:gap-16 lg:mx-18 lg:my-20 
           lg:gap-20
        "
      >
        {/* Text Content Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col w-full gap-6 text-center sm:w-4/5 md:w-1/2 lg:w-[35vw] lg:text-left"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 items-center md:items-start"
          >
            <PiTruck size={50} color="#0F0B43" className="mx-auto lg:mx-0" />
            <h1 className="text-3xl font-bold text-[#0F0B43] leading-tight sm:text-4xl xl:text-5xl">
              Freight Forwarding
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base leading-relaxed font-medium text-gray-700 sm:text-lg xl:w-3/4"
          >
            Red Sky's freight forwarding team books, tracks and delivers
            end-to-end freight.
          </motion.p>

          {/* List */}
          <motion.ul
            variants={itemVariants}
            className="mx-auto space-y-2 list-disc text-left text-gray-400 font-medium text-sm sm:text-base lg:mx-0 lg:pl-5"
          >
            <li>Ocean freight</li>
            <li>Road freight</li>
            <li>Live in-transit temperature visibility</li>
            <li>Customs clearance</li>
          </motion.ul>

          {/* Button */}
          <motion.button
            variants={itemVariants}
            className="mt-4 px-8 py-3 w-fit bg-[#0F0B43] text-white font-semibold rounded-2xl hover:bg-[#191368] transition-colors mx-auto md:w-1/2 lg:mx-0"
          >
            Learn more
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.img
          variants={itemVariants}
          src="/images/harbourcrane.jpg"
          alt="Harbor crane"
          className="object-cover w-full rounded-2xl shadow-md sm:w-4/5 md:w-3/4 lg:w-1/2 xl:w-[40%] 2xl:w-1/3"
        />
      </motion.div>
    </section>
  );
};

export default FeatureRgt;

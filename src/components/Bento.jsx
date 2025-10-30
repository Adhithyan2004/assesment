import { motion } from "framer-motion";
import BentoHeader from "./BentoHeader";
import BentoHeaderFeat from "./BentoHeaderFeat";
import BentoOrderCard from "./BentoOrderCard";
import BentoStatsCard from "./BentoStatCard";

const Bento = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative lg:overflow-hidden">
      <div className="hidden lg:block">
        <BentoStatsCard />
      </div>
      <BentoOrderCard />

      {/*  Grid Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-12 gap-2 mx-5 my-8 grid-rows-12 sm:mx-8 md:mx-10 md:my-20 lg:my-20 lg:h-[96vh]  sm:h-[90vh] xl:mx-20  xl:h-[90vh]"
      >
        {/* Box 1 */}
        <motion.div
          variants={itemVariants}
          className="row-span-6 rounded-lg hidden lg:block lg:col-span-4"
        >
          <BentoHeader />
        </motion.div>

        {/* Box 2 */}
        <motion.div
          variants={itemVariants}
          className="rounded-lg col-span-6 row-span-6 lg:col-span-4 lg:row-span-7"
        >
          <video
            src="https://res.cloudinary.com/dmxs1hptc/video/upload/v1761468500/farming_z1ta82.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full rounded-lg"
          />
        </motion.div>

        {/* Box 3 */}
        <motion.div
          variants={itemVariants}
          className="bg-[#EB6651] rounded-lg col-span-4 row-span-4 hidden lg:block"
        ></motion.div>

        {/* Box 4 */}
        <motion.div
          variants={itemVariants}
          className="rounded-lg col-span-6 row-span-6 lg:col-span-4 lg:row-span-8"
        >
          <video
            src="https://res.cloudinary.com/dmxs1hptc/video/upload/v1761468719/cargoship_t9seyt.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full rounded-lg"
          />
        </motion.div>

        {/* Box 5 */}
        <motion.div
          variants={itemVariants}
          className="row-span-6 col-span-12 bg-orange-400 rounded-lg lg:row-span-6 lg:col-span-4"
        >
          <img
            src="/images/ricefield.jpg"
            alt="RiceField"
            className="object-cover w-full h-full rounded-lg"
          />
        </motion.div>

        {/* Box 6 */}
        <motion.div
          variants={itemVariants}
          className="bg-[#F9F6EE] rounded-lg col-span-4 hidden row-span-5 lg:block"
        >
          <BentoHeaderFeat />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Bento;

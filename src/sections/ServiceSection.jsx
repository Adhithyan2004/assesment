import { LuTowerControl } from "react-icons/lu";
import Timeline from "../components/TimeLine";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const ServiceSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [showTimeline, setShowTimeline] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="hidden overflow-hidden lg:block">
      <motion.div
        className="flex flex-col gap-10 lg:my-30 xl:mx-20 xl:my-20"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        onAnimationComplete={() => setShowTimeline(true)} // Trigger Timeline after animation
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-6 lg:gap-4"
        >
          <LuTowerControl
            size={70}
            className="p-2 rounded-lg bg-linear-to-r from-[#FC5252] via-[#FB7B2E] to-[#FBB910]"
            color="#F9F6EE"
          />
          <p className="text-gray-500">OUR SERVICES</p>
          <h1 className="text-5xl font-bold">Control Tower Platform</h1>
          <p className="w-1/2 text-center">
            Red Sky's software platform directly increases profitability by
            reducing detention & demurrage, automating data entry and improving
            communication across your global supply chain.
          </p>
        </motion.div>

        {/* Timeline - appears AFTER animation completes */}
        {showTimeline && (
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Timeline />
          </motion.div>
        )}

        {/* Button */}
        <motion.div variants={itemVariants} className="flex justify-around">
          <button className="rounded-xl Btn">Learn more</button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceSection;

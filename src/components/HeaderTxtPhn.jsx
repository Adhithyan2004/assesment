import { motion } from "framer-motion";

const HeaderTxtPhn = () => {
  // Define animation variants for container and items
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center gap-6 mt-40 mx-5 lg:hidden"
    >
      {/* Heading */}
      <motion.h1
        variants={itemVariants}
        className="font-bold sm:text-5xl md:text-6xl text-4xl text-center"
      >
        Powering your <br />
        <span className="text-[#EB6651]"> supply chain</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="text-center w-3/4 sm:text-lg"
      >
        Supply chain software, trade finance and freight forwarding services for
        agrifood supply chains.
      </motion.p>

      {/* Button */}
      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="Btn rounded-lg sm:w-1/2 md:w-1/2 w-3/4"
      >
        CONTACT US
      </motion.button>
    </motion.div>
  );
};

export default HeaderTxtPhn;

import { motion } from "framer-motion";

const Globe = () => {
  return (
    <div className="relative w-full h-44 md:h-60 lg:h-80 xl:h-90 mt-40 overflow-hidden">
      {/* Globe fades in when in view */}
      <motion.img
        src="/svg/globe.svg"
        alt="Globe"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { duration: 1 } },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
        className="absolute inset-0 w-full h-full"
      />

      {/* Pins appear slightly after globe */}
      <motion.img
        src="/svg/pins.svg"
        alt="Pins"
        variants={{
          hidden: { opacity: 0, y: -20 },
          show: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.8, duration: 0.8, ease: "easeOut" },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="absolute inset-0 w-full h-full object-contain"
      />
    </div>
  );
};

export default Globe;

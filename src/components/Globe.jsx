import { motion } from "framer-motion";

const Globe = () => {
  return (
    <div className="relative w-full h-44 md:h-60 lg:h-80 xl:h-90 mt-40">
      {/* Globe appears first */}
      <motion.img
        src="/svg/globe.svg"
        alt="Globe"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full"
      />

      {/* Pins ease in after globe */}
      <motion.img
        src="/svg/pins.svg"
        alt="Pins"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute inset-0 w-full h-full object-contain"
      />
    </div>
  );
};

export default Globe;

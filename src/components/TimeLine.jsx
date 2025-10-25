import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Timeline = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Start the progress animation when mounted
    controls.start({
      width: "100%",
      transition: { duration: 2, ease: "easeInOut" },
    });
  }, [controls]);

  const steps = [
    "Real-time container tracking",
    "Early warning of 'at risk' shipments",
    "Shipping Document approval",
    "90% Reduction in emails,no Spreadsheets",
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="relative w-4/5">
        {/* Background line */}
        <div className="absolute left-0 w-full h-1 transform translate-y-1/2 bg-gray-200 rounded-full top-1/2"></div>

        {/* Animated progress bar */}
        <motion.div
          className="absolute left-0 h-1 transform translate-y-1/2 rounded-full top-1/2 bg-linear-to-r from-[#FC5252] to-[#FBB910]"
          initial={{ width: 0 }}
          animate={controls}
        />

        {/* Circles + labels */}
        <div className="flex justify-between mt-14">
          {steps.map((label, i) => (
            <div key={i} className="flex flex-col items-center w-1/4">
              <motion.div
                className="w-6 h-6 z-40 rounded-full border-4"
                initial={{ borderColor: "#FDBA74", backgroundColor: "#F3F4F6" }}
                animate={{
                  borderColor: "#A855F7",
                  backgroundColor: "#fff",
                }}
                transition={{
                  delay: i * 0.5, // each circle lights up sequentially
                  duration: 0.5,
                }}
              ></motion.div>
              <p className="w-3/4 mt-2 text-sm text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;

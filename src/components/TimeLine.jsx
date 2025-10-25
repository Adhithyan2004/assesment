import { useEffect, useState } from "react";

const Timeline = () => {
  const [progress, setProgress] = useState(0);

  // Animate progress on mount
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1; // increment by 1%
      if (current > 100) {
        clearInterval(interval);
      } else {
        setProgress(current);
      }
    }, 10); // 10ms per step → 1s total for full bar
    return () => clearInterval(interval);
  }, []);

  const steps = [
    "Real-time container tracking",
    "Early warning of 'at risk' shipments",
    "Shipping Document approval",
    "90% Reduction in emails,no Spreadsheets",
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      {/* Timeline container */}
      <div className="relative w-4/5 ">
        {/* Line */}
        <div className="absolute left-0 w-full h-1 transform translate-y-1/2 bg-gray-200 rounded-full top-1/2"></div>

        {/* Animated fill */}
        <div
          className="absolute left-0 h-1 transition-all ease-in-out transform translate-y-1/2 rounded-full top-1/2 bg-linear-to-r from-[#FC5252] to-[#FBB910] duration-2000"
          style={{ width: `${progress}%` }}
        ></div>

        {/* Circles + labels */}
        <div className="flex justify-between mt-14 ">
          {steps.map((label, i) => (
            <div key={i} className="flex flex-col items-center w-1/4 ">
              <div
                className={`w-6 h-6 z-40 rounded-full border-4 ${
                  progress > (i / (steps.length - 1)) * 100
                    ? "border-purple-500 bg-white"
                    : "border-orange-300 bg-gray-100"
                } transition-all duration-500`}
              ></div>
              <p className="w-3/4 mt-2 text-sm text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;

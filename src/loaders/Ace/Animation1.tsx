"use client";
import React from "react";
import { motion, easeInOut } from "motion/react";

const Aceternity = () => {
  const leftAVariants = {
    hidden: {
      pathLength: 0,
      fillOpacity: 0,
    },
    visible: {
      pathLength: 1,
      // fillOpacity: 1,
      strokeOpacity: 1,
      transition: {
        pathLength: { duration: 2, ease: easeInOut },
        // fillOpacity: { duration: 2, ease: easeInOut },
        strokeOpacity: { duration: 2, ease: easeInOut },
      },
    },
  };

  const rightAVariants = {
    hidden: {
      pathLength: 0,
      fillOpacity: 0,
      // strokeOpacity: 0,
    },
    visible: {
      pathLength: 1,
      strokeOpacity: 1,
      transition: {
        pathLength: { duration: 2, ease: easeInOut },
        strokeOpacity: { duration: 2, ease: easeInOut },
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 4,
      },
    },
  };

  return (
    <div className="flex items-center justify-center">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 512 512"
        width="100"
        height="100"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left "A" - fills from bottom to top */}
        <motion.path
          d="M80.674 404.759c28.541-78.606 56.972-156.837 85.404-235.068 13.362-36.768 26.787-73.513 40.006-110.332 1.5-4.18 3.77-5.616 8.061-5.601q47.243.165 94.484-.016c5.418-.02 8.338 2.013 10.226 7.304 12.865 36.056 26.042 72.001 39.09 107.992.842 2.323 1.933 4.608 1.893 7.172-1.383 1.919-3.356 1.144-5.086 1.145-28.495.021-56.99.066-85.486-.06-4.684-.021-7.243 1.71-8.87 6.193-23.784 65.57-47.706 131.092-71.584 196.628-7.238 19.865-14.55 39.705-21.59 59.64-1.694 4.8-4.235 6.724-9.478 6.682-28.327-.227-56.656-.095-84.985-.117-6.547-.005-7.024-.797-4.75-6.957 4.21-11.402 8.373-22.82 12.665-34.605"
          // fill="currentColor"
          stroke="currentColor"
          strokeWidth="2.5"
          variants={leftAVariants}
          style={{
            transformOrigin: "center bottom",
          }}
        />

        {/* Right "A" */}
        <motion.path
          d="M300.081 214.66c21.822-.001 43.157.193 64.485-.128 5.875-.088 8.55 2.131 10.512 7.465 17.638 47.94 35.486 95.802 53.322 143.668 8.713 23.38 17.537 46.72 26.299 70.083.817 2.18 1.559 4.39 2.324 6.589.903 2.594-.177 3.8-2.776 3.9-.999.04-2 .049-2.999.05-25.332.013-50.665.032-75.997.029-7.42 0-7.87-.306-10.297-7.486-10.18-30.117-20.318-60.248-30.51-90.36-.733-2.165-1.123-4.53-3.008-6.487-2.8 1.03-2.987 3.756-3.742 5.953-10.49 30.524-21.012 61.039-31.28 91.638-1.636 4.873-4.044 6.902-9.31 6.855-25.497-.228-50.997-.121-76.496-.148-7.416-.008-7.993-.777-5.37-7.738 13.545-35.95 27.126-71.887 40.71-107.823a110230 110230 0 0 1 40.62-107.347c3.306-8.72 3.371-8.695 13.513-8.713"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          variants={rightAVariants}
          style={{
            transformOrigin: "bottom left",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Aceternity;

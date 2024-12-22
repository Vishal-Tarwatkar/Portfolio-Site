import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

const path01Variants = {
   open: { d: "M3.06061 3 L21.0606 21" },
   closed: { d: "M0 8 L24 8" }, // Adjusted Y position
};

const path02Variants = {
   open: { d: "M3.00006 21 L21 3" },
   moving: { d: "M0 16 L24 16" }, // Adjusted Y position
   closed: { d: "M0 16 L12 16" }, // Adjusted Y position
};

const path03Variants = {
   open: { d: "M3.00006 21 L21 3" },
   open: { opacity: 0 },
   closed: { opacity: 1 },
};

const HamburgerIcon = () => {
   const [isOpen, setOpen] = useState(false);
   const path01Controls = useAnimation();
   const path02Controls = useAnimation();
   const path03Controls = useAnimation();

   const onClick = async () => {
      setOpen(!isOpen);
      if (!isOpen) {
         await path02Controls.start(path02Variants.moving);
         path01Controls.start(path01Variants.open);
         path02Controls.start(path02Variants.open);
         path03Controls.start(path03Variants.open);
      } else {
         path01Controls.start(path01Variants.closed);
         await path02Controls.start(path02Variants.moving);
         path02Controls.start(path02Variants.closed);
         path03Controls.start(path03Variants.closed);
      }
   };

   return (
      <button onClick={onClick}>
         <svg width="24" height="24" viewBox="0 0 24 24">
            <motion.path
               {...path01Variants.closed}
               animate={path01Controls}
               transition={{ duration: 0.2 }}
               stroke="#000000"
               strokeWidth={1.5}
            />
            <motion.path
               {...path02Variants.closed}
               animate={path02Controls}
               transition={{ duration: 0.2 }}
               stroke="#000000"
               strokeWidth={1.5}
            />
            <motion.path
               d="M0 12L 18 12" // Positioned at Y=12 for middle stroke
               animate={path03Controls}
               transition={{ duration: 0.2 }}
               stroke="#000000"
               strokeWidth={1.5}
            />
         </svg>
      </button>
   );
};

export default HamburgerIcon;

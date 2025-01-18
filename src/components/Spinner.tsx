import React from "react";
import { Loader } from "lucide-react";

const LucideSpinner: React.FC<{
  size?: number;
  color?: string;
  speed?: string;
}> = ({ size = 24, color = "currentColor", speed = "1s" }) => {
  return (
    <div className="flex justify-center items-center">
      <Loader
        size={size} // Size of the icon
        color={color} // Color of the icon
        className="animate-spin"
        style={{
          animationDuration: speed, // Adjust the spin speed
        }}
      />
    </div>
  );
};

export default LucideSpinner;

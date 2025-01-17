import React from "react";

interface ButtonProps {
  text: string;
  className: string;
  onClick: () => void;
}

export default function Button({ text, className, onClick }: ButtonProps) {
  return (
    <div>
      <button
        className={`font-bold py-2 px-4 rounded-2xl ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

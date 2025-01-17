interface ButtonProps {
  text: string;
  className: string;
  onClick: () => void;
}

export default function StyledButton({ text, className, onClick }: ButtonProps): JSX.Element {
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


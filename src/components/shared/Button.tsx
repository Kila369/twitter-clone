const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 font-semibold text-white rounded bg-[#1D9BF0] hover:bg-[#1A8CD8] focus:ring-2 focus:ring-[#1D9BF0] focus:ring-opacity-50"
    >
      {children}
    </button>
  );
};

export default Button;

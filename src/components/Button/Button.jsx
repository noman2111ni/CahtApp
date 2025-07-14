import { IoMdSend } from "react-icons/io";

const Button = () => {
  return (
    <div className="relative group cursor-pointer">
      <IoMdSend className="text-3xl text-blue-600 hover:text-blue-800 transition" />

      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-blue-500 text-white text-xs rounded px-2 py-1 whitespace-nowrap shadow-lg z-10">
        Send
      </div>
    </div>
  );
};

export default Button;

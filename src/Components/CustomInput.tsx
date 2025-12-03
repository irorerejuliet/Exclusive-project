import type { UseFormRegisterReturn } from "react-hook-form";

interface CustomInputProps {
  type?: string;
  placeholder?: string;
  className?: string;
  register?: UseFormRegisterReturn;
  error?: {
    message?: string;
  };
}

const CustomInput = ({
  type = "text",
  placeholder = "",
  className = "",
  register,
  error,
}: CustomInputProps) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        {...register} // <-- This connects RHF to your input
        className={`border-b-2 border-gray-300 focus:outline-none ${className}`}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default CustomInput;

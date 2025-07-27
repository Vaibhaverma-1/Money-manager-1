import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = ({
  label,
  value,
  onChange,
  placeholder,
  type,
  isSelect,
  options,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className="mb-4">
      {/* Label */}
      <label className="text-sm font-medium text-gray-700 dark:text-green-200 block mb-1">
        {label}
      </label>

      <div className="relative">
        {/* Select Input */}
        {isSelect ? (
          <select
            value={value}
            onChange={onChange}
            className="w-full rounded-md border border-green-300 dark:border-green-600 bg-white dark:bg-green-950 text-gray-700 dark:text-green-100 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="text-sm"
              >
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          // Text / Password Input
          <input
            type={
              type === "password" ? (showPassword ? "text" : "password") : type
            }
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full rounded-md border border-green-300 dark:border-green-600 bg-white dark:bg-green-950 text-gray-800 dark:text-green-100 py-2 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        )}

        {/* Toggle Password Visibility */}
        {type === "password" && (
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 dark:text-green-300"
            onClick={toggleShowPassword}
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;

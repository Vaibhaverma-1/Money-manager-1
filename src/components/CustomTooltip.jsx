import { addThousandsSeparator } from "../util/util.js";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md border border-green-200 bg-white px-3 py-2 shadow-lg dark:bg-green-950 dark:border-green-700">
        <p className="text-xs font-semibold text-green-600 dark:text-green-300 mb-1">
          {payload[0].name}
        </p>
        <p className="text-sm text-gray-700 dark:text-green-100">
          Amount:{" "}
          <span className="font-medium text-green-800 dark:text-green-300">
            ₹{addThousandsSeparator(payload[0].value)}
          </span>
        </p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;

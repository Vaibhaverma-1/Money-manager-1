import { useEffect, useState } from "react";
import { prepareIncomeLineChartData } from "../util/util.js";
import CustomLineChart from "./CustomLineChart.jsx";
import { Plus } from "lucide-react";

const IncomeOverview = ({ transactions, onAddIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareIncomeLineChartData(transactions);
    setChartData(result);
  }, [transactions]);

  return (
    <div className="rounded-md border border-green-200 dark:border-green-700 bg-white dark:bg-green-950 p-4 shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-lg font-semibold text-green-800 dark:text-green-100">
            Income Overview
          </h5>
          <p className="text-xs text-gray-500 dark:text-green-300 mt-1">
            Track your earnings over time and analyze your income trends.
          </p>
        </div>
        <button
          className="inline-flex items-center gap-2 rounded-md border border-green-300 dark:border-green-600 bg-green-100 dark:bg-green-900 px-4 py-2 text-sm font-medium text-green-800 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-800 transition"
          onClick={onAddIncome}
        >
          <Plus size={16} />
          Add Income
        </button>
      </div>

      {/* Chart Section */}
      <div className="mt-8">
        <CustomLineChart data={chartData} />
      </div>
    </div>
  );
};

export default IncomeOverview;

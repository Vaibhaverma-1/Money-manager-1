import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import CustomLineChart from "./CustomLineChart.jsx";
import { prepareIncomeLineChartData } from "../util/util.js";

const ExpenseOverview = ({ transactions, onExpenseIncome }) => {
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
            Expense Overview
          </h5>
          <p className="text-xs text-gray-500 dark:text-green-300 mt-0.5">
            Track your spending trends over time and gain insights into where
            your money goes.
          </p>
        </div>

        <button
          className="inline-flex items-center gap-1 rounded-md border border-green-300 dark:border-green-600 bg-green-100 dark:bg-green-900 px-3 py-1.5 text-sm font-medium text-green-800 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-800 transition"
          onClick={onExpenseIncome}
        >
          <Plus size={16} />
          Add Expense
        </button>
      </div>

      {/* Chart */}
      <div className="mt-10">
        <CustomLineChart data={chartData} />
      </div>
    </div>
  );
};

export default ExpenseOverview;

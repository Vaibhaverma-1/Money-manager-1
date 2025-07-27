import CustomPieChart from "./CustomPieChart.jsx";
import { addThousandsSeparator } from "../util/util.js";

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  const COLORS = ["#BBF7D0", "#FECACA", "#BFDBFE"]; // Green, Red, Teal

  const balanceData = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Expenses", amount: totalExpense },
    { name: "Total Income", amount: totalIncome },
  ];

  return (
    <div className="rounded-md border border-green-200 dark:border-green-700 bg-white dark:bg-green-950 p-4 shadow-md">
      <div className="mb-4">
        <h5 className="text-lg font-semibold text-green-800 dark:text-green-100">
          Financial Overview
        </h5>
      </div>

      <CustomPieChart
        data={balanceData}
        label="Total Balance"
        totalAmount={`${addThousandsSeparator(totalBalance)}`}
        colors={COLORS}
        showTextAnchor
      />
    </div>
  );
};

export default FinanceOverview;

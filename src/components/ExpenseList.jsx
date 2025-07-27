import moment from "moment";
import { Download, Mail } from "lucide-react";
import TransactionInfoCard from "./TransactionInfoCard.jsx";

const ExpenseList = ({ transactions, onDelete, onDownload, onEmail }) => {
  return (
    <div className="rounded-md border border-green-200 dark:border-green-700 bg-white dark:bg-green-950 p-4 shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold text-green-800 dark:text-green-100">
          All Expenses
        </h5>

        <div className="flex gap-2">
          <button
            className="inline-flex items-center gap-1 rounded-md border border-green-300 dark:border-green-600 bg-green-100 dark:bg-green-900 px-3 py-1.5 text-sm font-medium text-green-800 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-800 transition"
            onClick={onEmail}
          >
            <Mail size={16} />
            Email
          </button>

          <button
            className="inline-flex items-center gap-1 rounded-md border border-green-300 dark:border-green-600 bg-green-100 dark:bg-green-900 px-3 py-1.5 text-sm font-medium text-green-800 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-800 transition"
            onClick={onDownload}
          >
            <Download size={16} />
            Download
          </button>
        </div>
      </div>

      {/* Transactions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {transactions?.map((expense) => (
          <TransactionInfoCard
            key={expense.id}
            title={expense.name}
            icon={expense.icon}
            date={moment(expense.date).format("Do MMM YYYY")}
            amount={expense.amount}
            type="expense"
            onDelete={() => onDelete(expense.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;

import { ArrowRight } from "lucide-react";
import TransactionInfoCard from "./TransactionInfoCard.jsx";
import moment from "moment";

const RecentTransactions = ({ transactions, onMore }) => {
  return (
    <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-md p-6 shadow-md space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Recent Transactions
        </h4>

        <button
          onClick={onMore}
          className="flex items-center gap-1 text-sm text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium transition-colors"
        >
          More <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3">
        {transactions?.slice(0, 5)?.map((item, index) => (
          <TransactionInfoCard
            key={`${item._id || item.id || "txn"}-${index}`}
            title={item.name}
            icon={item.icon}
            date={moment(item.date).format("Do MMM YYYY")}
            amount={item.amount}
            type={item.type}
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;

import { ArrowRight } from "lucide-react";
import TransactionInfoCard from "./TransactionInfoCard.jsx";
import moment from "moment";

const Transactions = ({ transactions, onMore, type, title }) => {
  return (
    <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-md p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h5>
        <button
          onClick={onMore}
          className="flex items-center gap-1 text-sm font-medium text-green-700 hover:text-green-800 transition-colors"
        >
          More
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Transactions List */}
      <div className="space-y-3">
        {transactions?.slice(0, 5)?.map((item) => (
          <TransactionInfoCard
            key={item.id}
            title={item.name}
            icon={item.icon}
            date={moment(item.date).format("Do MMM YYYY")}
            amount={item.amount}
            type={type}
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
};

export default Transactions;

import {
  Trash2,
  TrendingDown,
  TrendingUp,
  UtensilsCrossed,
} from "lucide-react";
import { addThousandsSeparator } from "../util/util.js";

const TransactionInfoCard = ({
  icon,
  title,
  date,
  amount,
  type,
  hideDeleteBtn,
  onDelete,
}) => {
  const amountStyle =
    type === "income"
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";

  return (
    <div className="group relative flex items-center gap-4 mt-3 px-4 py-3 bg-white dark:bg-neutral-900 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-neutral-700">
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-md bg-green-50 dark:bg-green-900/20 text-green-600 text-xl shadow-inner">
        {icon ? (
          <img src={icon} alt={title} className="w-6 h-6 object-contain" />
        ) : (
          <UtensilsCrossed className="text-green-700" />
        )}
      </div>

      {/* Title and Date */}
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-800 dark:text-white">
          {title}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          {date}
        </p>
      </div>

      {/* Amount and Delete */}
      <div className="flex items-center gap-3">
        {!hideDeleteBtn && (
          <button
            onClick={onDelete}
            className="text-gray-400 hover:text-red-600 transition-opacity opacity-0 group-hover:opacity-100"
            aria-label="Delete transaction"
          >
            <Trash2 size={18} />
          </button>
        )}

        <div
          className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium ${amountStyle}`}
        >
          {type === "income" ? "+" : "-"} ₹{addThousandsSeparator(amount)}
          {type === "income" ? (
            <TrendingUp size={16} />
          ) : (
            <TrendingDown size={16} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionInfoCard;

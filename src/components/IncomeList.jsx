import { Download, LoaderCircle, Mail } from "lucide-react";
import TransactionInfoCard from "./TransactionInfoCard.jsx";
import moment from "moment";
import { useState } from "react";

const IncomeList = ({ transactions, onDelete, onDownload, onEmail }) => {
  const [loading, setLoading] = useState(false);

  const handleEmail = async () => {
    setLoading(true);
    try {
      await onEmail();
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    setLoading(true);
    try {
      await onDownload();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-md border border-green-200 dark:border-green-700 bg-white dark:bg-green-950 p-4 shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold text-green-800 dark:text-green-100">
          Income Sources
        </h5>

        <div className="flex gap-2">
          <button
            disabled={loading}
            className="inline-flex items-center gap-1 rounded-md border border-green-300 dark:border-green-600 bg-green-100 dark:bg-green-900 px-3 py-1.5 text-sm font-medium text-green-800 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-800 transition"
            onClick={handleEmail}
          >
            {loading ? (
              <>
                <LoaderCircle className="w-4 h-4 animate-spin" />
                Emailing...
              </>
            ) : (
              <>
                <Mail size={16} />
                Email
              </>
            )}
          </button>

          <button
            disabled={loading}
            className="inline-flex items-center gap-1 rounded-md border border-green-300 dark:border-green-600 bg-green-100 dark:bg-green-900 px-3 py-1.5 text-sm font-medium text-green-800 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-800 transition"
            onClick={handleDownload}
          >
            {loading ? (
              <>
                <LoaderCircle className="w-4 h-4 animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                <Download size={16} />
                Download
              </>
            )}
          </button>
        </div>
      </div>

      {/* Income Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {transactions?.map((income) => (
          <TransactionInfoCard
            key={income.id}
            title={income.name}
            icon={income.icon}
            date={moment(income.date).format("Do MMM YYYY")}
            amount={income.amount}
            type="income"
            onDelete={() => onDelete(income.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default IncomeList;

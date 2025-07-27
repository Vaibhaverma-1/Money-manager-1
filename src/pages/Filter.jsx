import Dashboard from "../components/Dashboard.jsx";
import { useUser } from "../hooks/useUser.jsx";
import { Search } from "lucide-react";
import { useState } from "react";
import axiosConfig from "../util/axiosConfig.jsx";
import { API_ENDPOINTS } from "../util/apiEndpoints.js";
import toast from "react-hot-toast";
import TransactionInfoCard from "../components/TransactionInfoCard.jsx";
import moment from "moment";

const Filter = () => {
  useUser();
  const [type, setType] = useState("income");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [keyword, setKeyword] = useState("");
  const [sortField, setSortField] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axiosConfig.post(API_ENDPOINTS.APPLY_FILTERS, {
        type,
        startDate,
        endDate,
        keyword,
        sortField,
        sortOrder,
      });
      setTransactions(response.data);
    } catch (error) {
      console.error("Failed to fetch transactions: ", error);
      toast.error(error.message || "Failed to fetch transactions.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dashboard activeMenu="Filters">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-green-700">
            Filter Transactions
          </h2>
        </div>

        <div className="card p-6 mb-6">
          <h5 className="text-lg font-semibold mb-4">Select the filters</h5>

          <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div>
              <label
                htmlFor="type"
                className="text-sm font-medium text-gray-700 mb-1 block"
              >
                Type
              </label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-600"
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="startdate"
                className="text-sm font-medium text-gray-700 mb-1 block"
              >
                Start Date
              </label>
              <input
                id="startdate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-600"
              />
            </div>

            <div>
              <label
                htmlFor="enddate"
                className="text-sm font-medium text-gray-700 mb-1 block"
              >
                End Date
              </label>
              <input
                id="enddate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-600"
              />
            </div>

            <div>
              <label
                htmlFor="sortfield"
                className="text-sm font-medium text-gray-700 mb-1 block"
              >
                Sort Field
              </label>
              <select
                id="sortfield"
                value={sortField}
                onChange={(e) => setSortField(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-600"
              >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
                <option value="category">Category</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="sortorder"
                className="text-sm font-medium text-gray-700 mb-1 block"
              >
                Sort Order
              </label>
              <select
                id="sortorder"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-600"
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>

            <div className="flex items-end gap-2">
              <div className="w-full">
                <label
                  htmlFor="keyword"
                  className="text-sm font-medium text-gray-700 mb-1 block"
                >
                  Search
                </label>
                <input
                  id="keyword"
                  type="text"
                  placeholder="Search..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-600"
                />
              </div>
              <button
                onClick={handleSearch}
                className="bg-green-600 hover:bg-green-700 text-white rounded-md p-2 transition-all"
              >
                <Search size={20} />
              </button>
            </div>
          </form>
        </div>

        <div className="card p-6">
          <div className="mb-4">
            <h5 className="text-lg font-semibold text-green-700">
              Transactions
            </h5>
          </div>

          {transactions.length === 0 && !loading && (
            <p className="text-gray-500">
              Select filters and click search to view transactions.
            </p>
          )}

          {loading && <p className="text-gray-500">Loading Transactions...</p>}

          {transactions.map((transaction) => (
            <TransactionInfoCard
              key={transaction.id}
              title={transaction.name}
              icon={transaction.icon}
              date={moment(transaction.date).format("Do MMM YYYY")}
              amount={transaction.amount}
              type={type}
              hideDeleteBtn
            />
          ))}
        </div>
      </div>
    </Dashboard>
  );
};

export default Filter;

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="text-center py-20 md:py-32 bg-white dark:bg-green-950">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-green-800 dark:text-green-100 leading-tight">
          Take Control of Your Finances
        </h1>

        {/* Subtext */}
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-green-700 dark:text-green-300">
          Your foundation for secure, intelligent financial management.
          Effortlessly track your income and expenses to achieve your financial
          goals.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/signup"
            className="w-full sm:w-auto bg-green-600 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-green-700 transition-all shadow-md"
          >
            Start Tracking for Free
          </Link>
          <Link
            to="/about"
            className="w-full sm:w-auto bg-green-100 text-green-800 px-8 py-3 rounded-md font-semibold text-lg hover:bg-green-200 transition-all flex items-center justify-center gap-2 dark:bg-green-900 dark:text-green-100 dark:hover:bg-green-800"
          >
            Learn More <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Dashboard Preview Card (Enlarged and Detailed) */}
        <div className="mt-24 mx-auto max-w-6xl">
          <div className="rounded-md border border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900 p-10 shadow-xl">
            <h2 className="text-3xl font-bold text-green-800 dark:text-green-100 mb-8">
              Dashboard Preview
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
              <div className="bg-white dark:bg-green-950 rounded-md p-6 shadow">
                <p className="text-green-600 dark:text-green-300 text-sm mb-2">
                  Total Income
                </p>
                <p className="text-3xl font-bold text-green-800 dark:text-green-100">
                  ₹25,000
                </p>
                <p className="text-base text-gray-600 dark:text-green-300 mt-3">
                  Includes salary, freelance earnings, bonuses, and all other
                  income sources recorded in this month.
                </p>
              </div>
              <div className="bg-white dark:bg-green-950 rounded-md p-6 shadow">
                <p className="text-red-600 dark:text-red-300 text-sm mb-2">
                  Total Expenses
                </p>
                <p className="text-3xl font-bold text-red-800 dark:text-red-100">
                  ₹15,200
                </p>
                <p className="text-base text-gray-600 dark:text-green-300 mt-3">
                  All your logged spending: groceries, bills, shopping, travel,
                  entertainment, and utilities.
                </p>
              </div>
              <div className="bg-white dark:bg-green-950 rounded-md p-6 shadow">
                <p className="text-gray-600 dark:text-green-300 text-sm mb-2">
                  Remaining Balance
                </p>
                <p className="text-3xl font-bold text-green-800 dark:text-green-100">
                  ₹9,800
                </p>
                <p className="text-base text-gray-600 dark:text-green-300 mt-3">
                  What’s left this month for savings, investment or emergency
                  fund after expenses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// src/pages/About.jsx
import { ShieldCheck, TrendingUp, Wallet } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-green-50 dark:bg-green-900 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 dark:text-green-100 mb-10">
          Why Choose FinTrack?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-green-950 p-6 rounded-md shadow text-center">
            <ShieldCheck className="h-10 w-10 mx-auto text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Secure Data</h3>
            <p className="text-sm text-gray-700 dark:text-green-300">
              Your financial data is end-to-end encrypted and safely stored.
            </p>
          </div>
          <div className="bg-white dark:bg-green-950 p-6 rounded-md shadow text-center">
            <TrendingUp className="h-10 w-10 mx-auto text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Smart Analytics</h3>
            <p className="text-sm text-gray-700 dark:text-green-300">
              Get insights into your income, expenses, and spending trends.
            </p>
          </div>
          <div className="bg-white dark:bg-green-950 p-6 rounded-md shadow text-center">
            <Wallet className="h-10 w-10 mx-auto text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Expense Tracking</h3>
            <p className="text-sm text-gray-700 dark:text-green-300">
              Log all your transactions effortlessly and track in real-time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

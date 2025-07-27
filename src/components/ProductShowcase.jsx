import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Wallet, Banknote } from "lucide-react";

const ProductShowcase = () => {
  return (
    <section className="pb-20 md:pb-32">
      <div className="container mx-auto px-4 sm:px-8 md:px-16">
        <Card className="bg-white dark:bg-green-950 border border-green-200 dark:border-green-700 shadow-xl">
          <CardHeader>
            <CardTitle className="text-green-800 dark:text-green-100 text-2xl">
              Sample Dashboard Preview
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-green-900 dark:text-green-100">
            <div className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-900 rounded-md shadow">
              <Wallet className="w-8 h-8 text-green-700 dark:text-green-300" />
              <div>
                <p className="text-sm">Total Balance</p>
                <p className="font-bold text-lg">₹25,000</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-900 rounded-md shadow">
              <Banknote className="w-8 h-8 text-green-700 dark:text-green-300" />
              <div>
                <p className="text-sm">Income</p>
                <p className="font-bold text-lg">₹40,000</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-900 rounded-md shadow">
              <TrendingUp className="w-8 h-8 text-green-700 dark:text-green-300" />
              <div>
                <p className="text-sm">Expenses</p>
                <p className="font-bold text-lg">₹15,000</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductShowcase;

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import EmojiPickerPopup from "./EmojiPickerPopup";
import { PlusCircle } from "lucide-react";

const AddExpenseForm = ({ onAddExpense, categories }) => {
  const [expense, setExpense] = useState({
    name: "",
    categoryId: "",
    amount: "",
    date: "",
    icon: "",
  });

  useEffect(() => {
    if (categories?.length > 0 && !expense.categoryId) {
      setExpense((prev) => ({ ...prev, categoryId: categories[0].id }));
    }
  }, [categories, expense.categoryId]);

  const handleChange = (key, value) =>
    setExpense((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="space-y-5 p-4">
      <EmojiPickerPopup
        icon={expense.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />

      <div className="space-y-2">
        <Label>Expense Title</Label>
        <Input
          type="text"
          placeholder="e.g., Electricity Bill"
          value={expense.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label>Category</Label>
        <Select
          value={expense.categoryId}
          onValueChange={(val) => handleChange("categoryId", val)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.id}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Amount</Label>
        <Input
          type="number"
          placeholder="e.g., 150"
          value={expense.amount}
          onChange={(e) => handleChange("amount", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label>Date</Label>
        <Input
          type="date"
          value={expense.date}
          onChange={(e) => handleChange("date", e.target.value)}
        />
      </div>

      <div className="flex justify-end pt-4">
        <Button
          onClick={() => onAddExpense(expense)}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Expense
        </Button>
      </div>
    </div>
  );
};

export default AddExpenseForm;

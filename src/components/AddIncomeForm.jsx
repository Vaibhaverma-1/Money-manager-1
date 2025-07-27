import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { LoaderCircle, PlusCircle } from "lucide-react";
import EmojiPickerPopup from "./EmojiPickerPopup";

const AddIncomeForm = ({ onAddIncome, categories }) => {
  const [income, setIncome] = useState({
    name: "",
    amount: "",
    date: "",
    icon: "",
    categoryId: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (categories?.length > 0 && !income.categoryId) {
      setIncome((prev) => ({ ...prev, categoryId: categories[0].id }));
    }
  }, [categories, income.categoryId]);

  const handleChange = (key, value) =>
    setIncome((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="space-y-5 p-4">
      <EmojiPickerPopup
        icon={income.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />

      <div className="space-y-2">
        <Label>Income Source</Label>
        <Input
          type="text"
          placeholder="e.g., Freelance Project"
          value={income.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label>Category</Label>
        <Select
          value={income.categoryId}
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
          placeholder="e.g., 500.00"
          value={income.amount}
          onChange={(e) => handleChange("amount", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label>Date</Label>
        <Input
          type="date"
          value={income.date}
          onChange={(e) => handleChange("date", e.target.value)}
        />
      </div>

      <div className="flex justify-end pt-4">
        <Button
          onClick={async () => {
            setLoading(true);
            try {
              await onAddIncome(income);
            } finally {
              setLoading(false);
            }
          }}
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          {loading ? (
            <>
              <LoaderCircle className="w-4 h-4 animate-spin mr-2" />
              Adding...
            </>
          ) : (
            <>
              <PlusCircle className="w-4 h-4 mr-2" />
              Add Income
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default AddIncomeForm;

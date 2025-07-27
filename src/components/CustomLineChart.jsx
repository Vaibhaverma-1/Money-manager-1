import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { addThousandsSeparator } from "../util/util.js";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;

    const groupedItems =
      dataPoint.items?.reduce((acc, item) => {
        const { categoryName, amount } = item;
        acc[categoryName] = (acc[categoryName] || 0) + amount;
        return acc;
      }, {}) || {};

    return (
      <div className="rounded-md border bg-popover p-3 shadow-md text-sm space-y-2">
        <p className="font-semibold text-foreground">{label}</p>
        <p className="font-medium text-green-600">
          Total: ₹{addThousandsSeparator(dataPoint.totalAmount)}
        </p>
        {Object.entries(groupedItems).length > 0 && (
          <div className="space-y-1 pt-1 border-t border-muted">
            <p className="text-xs font-semibold text-muted-foreground">
              Details:
            </p>
            {Object.entries(groupedItems).map(([category, amt], idx) => (
              <div
                key={idx}
                className="flex justify-between text-xs text-foreground"
              >
                <span>{category}</span>
                <span>₹{addThousandsSeparator(amt)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  return null;
};

const CustomLineChart = ({ data }) => {
  return (
    <div className="bg-card p-4 rounded-md shadow-sm border">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#64748b" }} />
          <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
          <Tooltip content={<CustomTooltip />} />

          <Area
            type="monotone"
            dataKey="totalAmount"
            stroke="#16a34a"
            fill="url(#greenGradient)"
            strokeWidth={3}
            dot={{ r: 3, fill: "#4ade80" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;

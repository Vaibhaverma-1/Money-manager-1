import React from "react";

const CustomLegend = ({ payload }) => {
  if (!payload || !payload.length) return null;

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-4">
      {payload.map((entry, index) => (
        <div
          key={`legend-${index}`}
          className="flex items-center space-x-2 bg-muted px-3 py-1 rounded-md shadow-sm"
        >
          <div
            className="w-3 h-3 rounded-md border border-muted-foreground"
            style={{ backgroundColor: entry.color }}
          ></div>
          <span className="text-sm font-medium text-foreground">
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CustomLegend;

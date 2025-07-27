import { Layers2, Pencil } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CategoryList = ({ categories, onEditCategory }) => {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-green-700">
          Category Sources
        </h4>
      </div>

      {categories.length === 0 ? (
        <p className="text-muted-foreground">
          No categories added yet. Add some to get started!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <CardContent
              key={category.id}
              className="flex items-center gap-4 p-4 rounded-md border border-gray-200 hover:shadow-sm group"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-green-100 text-xl">
                {category.icon ? (
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="h-5 w-5 object-contain"
                  />
                ) : (
                  <Layers2 className="text-green-800" size={24} />
                )}
              </div>

              {/* Name and type */}
              <div className="flex-1">
                <p className="text-base font-medium text-gray-800">
                  {category.name}
                </p>
                <p className="text-sm capitalize text-gray-400">
                  {category.type}
                </p>
              </div>

              {/* Edit button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onEditCategory(category)}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Pencil size={18} className="text-green-600" />
              </Button>
            </CardContent>
          ))}
        </div>
      )}
    </Card>
  );
};

export default CategoryList;

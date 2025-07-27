import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const DeleteAlert = ({ content, onDelete }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await onDelete();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Alert className="bg-white dark:bg-green-950 border border-green-200 dark:border-green-700 text-green-900 dark:text-green-100">
      <AlertDescription className="text-sm mb-4">{content}</AlertDescription>

      <div className="flex justify-end">
        <Button
          variant="destructive"
          disabled={loading}
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 text-white dark:bg-red-700 dark:hover:bg-red-800"
        >
          {loading ? (
            <>
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
              Deleting...
            </>
          ) : (
            "Delete"
          )}
        </Button>
      </div>
    </Alert>
  );
};

export default DeleteAlert;

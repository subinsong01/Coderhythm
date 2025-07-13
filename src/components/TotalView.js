import { useEffect, useState } from "react";
import { getTotalViews } from "../../lib/incrementView";

export default function TotalView() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getTotalViews()
      .then(setTotal)
      .catch(() => setTotal(0));
  }, []);

  return (
    <div className="text-right sm:text-sm text-xs text-gray-600 dark:text-gray-400 px-4 ml-auto">
      조회수 | <span className="font-semibold">{total.toLocaleString()}회</span>
    </div>
  );
}

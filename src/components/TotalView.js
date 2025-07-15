import { useEffect, useState } from "react";
import { getTotalViews } from "../../lib/incrementView";
import { useTranslation } from "next-i18next";

export default function TotalView() {
  const [total, setTotal] = useState(0);
  const { t } = useTranslation("common");

  useEffect(() => {
    getTotalViews()
      .then(setTotal)
      .catch(() => setTotal(0));
  }, []);

  return (
    <div className="text-right sm:text-sm text-xs text-gray-600 dark:text-gray-400 px-4 ml-auto">
      {t("views")} |{" "}
      <span className="font-semibold">
        {total.toLocaleString()}
        {t("views_suffix")}
      </span>
    </div>
  );
}

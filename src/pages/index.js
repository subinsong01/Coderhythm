import { useEffect } from "react";
import { incrementViewCount } from "../../lib/incrementView";
import Comments from "@/components/Comments";
export default function Home() {
  useEffect(() => {
    incrementViewCount("home");
  }, []);

  return (
    <div className="w-full px-2">
      <Comments />
    </div>
  );
}

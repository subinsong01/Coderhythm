import { useEffect } from "react";
import { incrementViewCount } from "../../lib/incrementView";
export default function Home() {
  useEffect(() => {
    incrementViewCount("home");
  }, []);

  return <div className="max-w-[940px] mx-auto"></div>;
}

import { useState, useEffect } from "react";

export default function useMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleReSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    handleReSize();

    window.addEventListener("resize", handleReSize);

    return () => window.removeEventListener("resize", handleReSize);
  }, [breakpoint]);

  return isMobile;
}

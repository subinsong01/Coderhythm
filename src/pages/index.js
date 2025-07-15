import { useEffect } from "react";
import { incrementViewCount } from "../../lib/incrementView";
import Comments from "@/components/Comments";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
    },
  };
}

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

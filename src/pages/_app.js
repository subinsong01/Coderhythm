import useDarkMode from "@/hook/useDarkMode";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import TotalView from "@/components/TotalView";
import nextI18NextConfig from "../../next-i18next.config";
function App({ Component, pageProps }) {
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="max-full mx-auto  flex flex-col min-h-screen">
        <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
        <TotalView />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>

        <Footer />
      </div>
    </div>
  );
}
export default appWithTranslation(App, nextI18NextConfig);

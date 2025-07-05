import useDarkMode from "@/hook/useDarkMode";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-[940px] mx-auto  flex flex-col min-h-screen">
        <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />

        <main className="flex-grow">
          <Component {...pageProps} />
        </main>

        <Footer />
      </div>
    </div>
  );
}

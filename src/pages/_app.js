import useDarkMode from "@/hook/useDarkMode";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <>
      <main className="max-w-[940px] mx-auto min-h-screen bg-white text-black dark:bg-black dark:text-white">
        <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

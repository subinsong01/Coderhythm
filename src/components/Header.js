import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import useMobile from "@/hook/useMobile";
export default function Header({ isDark, toggleDarkMode }) {
  const router = useRouter();
  const { t, i18n, ready } = useTranslation("common");
  const isMobile = useMobile();

  const changeLanguage = (e) => {
    const selectedLang = e.target.value;
    console.log("Selected language:", selectedLang);
    router.push(router.pathname, router.asPath, { locale: selectedLang });
  };

  return (
    <header className="py-4 flex justify-between px-4">
      <h1 className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-white">
        Coderhythm
      </h1>
      <div className="flex items-center gap-4">
        <select
          onChange={changeLanguage}
          value={router.locale}
          className="px-2 py-1 border rounded-md text-sm dark:bg-gray-800 dark:text-white"
        >
          <option value="ko">🇰🇷 한국어</option>
          <option value="en">🇺🇸 English</option>
          <option value="ja">🇯🇵 日本語</option>
        </select>
        <a
          href="https://github.com/subinsong01"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md font-bold text-sky-500 hover:underline flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="/profile.jpeg"
              alt="Profile"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          {!isMobile && <span suppressHydrationWarning>{t("name")}</span>}
        </a>
        <button
          onClick={toggleDarkMode}
          className="relative w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-700 transition-colors duration-300 cursor-pointer"
          aria-label="Toggle Dark Mode"
        >
          <span
            className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              isDark ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </header>
  );
}

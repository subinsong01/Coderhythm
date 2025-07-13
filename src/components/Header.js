import Image from "next/image";
export default function Header({ isDark, toggleDarkMode }) {
  return (
    <header className="py-4 flex justify-between px-4">
      <h1 className="text-sm sm:text-xl font-bold text-gray-800 dark:text-white">
        Coderhythm
      </h1>
      <div className="flex items-center gap-4">
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
          수빈
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

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4 text-sm ">
      <div className="max-full mx-auto flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-center">
        <span>© subin</span>
        <span className="hidden sm:inline">|</span>
        <a href="mailto:haely97@naver.com" className="underline">
          Email
        </a>
        <span className="hidden sm:inline">|</span>
        <a
          href="https://github.com/subinsong01"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}

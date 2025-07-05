export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4 text-sm px-4">
      <div className="max-w-[940px] mx-auto flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-center">
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
      <p className="mt-3 max-w-[600px] mx-auto text-center text-xs sm:text-sm italic px-2 sm:px-0">
        <em>『모던 리액트 Deep Dive』</em> 책 내용을 참고하여 제작되었습니다.
      </p>
    </footer>
  );
}

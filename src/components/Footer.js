export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
      © 2025 수빈 |
      <a href="haely97@naver.com" className="underline mx-1">
        Email
      </a>{" "}
      |
      <a
        href="https://github.com/subinsong01"
        target="_blank"
        rel="noopener noreferrer"
        className="underline mx-1"
      >
        GitHub
      </a>
      <p className="mt-2">모던 리액트 Deep Dive 개인 프로젝트</p>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
      © 2025 수빈 |
      <a href="mailto:haely97@naver.com" className="underline mx-1">
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
      <p className="mt-2">
        이 사이트는 <em>『모던 리액트 Deep Dive』</em> 책 내용을 참고하여
        제작되었습니다.
      </p>
    </footer>
  );
}

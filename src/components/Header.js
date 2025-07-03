import Image from "next/image";

export default function Header() {
  return (
    <header className="py-4 px-6 flex justify-between">
      <h1 className="text-xl font-bold text-gray-800">모던 리액트 Deep Dive</h1>
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
    </header>
  );
}

import Image from 'next/image';
import Link from 'next/link';

export const Navigation = () => {
  return (
    <nav className="flex w-full items-center justify-between">
      {/* LOGO */}
      <Image src="/logo.png" alt="logo" width={170} height={40} />

      {/* MENU */}
      <div className="flex gap-10 2xl:gap-20">
        <ul className="flex items-center justify-center gap-2.5 rounded-full bg-gray-light px-8 text-black 2xl:px-12">
          <li>
            <Link className="inline-block p-4 2xl:p-6" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="inline-block p-4 2xl:p-6" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="inline-block p-4 2xl:p-6" href="/features">
              Features
            </Link>
            <ul>
              <li className="hidden">Feature1</li>
              <li className="hidden">Feature2</li>
            </ul>
          </li>
          <li>
            <Link className="inline-block p-4 2xl:p-6" href="/pages">
              Pages
            </Link>
            <ul>
              <li className="hidden">Page1</li>
              <li className="hidden">Page2</li>
            </ul>
          </li>
          <li>
            <Link className="inline-block p-4 2xl:p-6" href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="inline-block p-4 2xl:p-6" href="/cart">
              Cart <span>(0)</span>
            </Link>
          </li>
        </ul>
        <button className="rounded-full bg-purple text-white">
          <Link className="inline-block py-4 px-8 2xl:px-12  2xl:py-6" href="/login">
            Sign In
          </Link>
        </button>
      </div>
    </nav>
  );
};

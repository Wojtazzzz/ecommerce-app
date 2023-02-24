'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex h-14 w-full items-center justify-between">
      {/* HAMBURGER BUTTON */}
      <Image src="/bars.png" alt="menu toggle" width={40} height={30} />

      {/* LOGO */}
      <Image src="/logo.png" alt="logo" width={150} height={40} />

      {/* CART BUTTON */}
      <button className="relative">
        <Image src="/cart.png" alt="menu toggle" width={40} height={30} />
        <span className="absolute top-[-5px] right-[-5px] h-5 min-w-[20px] rounded-full bg-purple px-1 text-[14px] text-white">
          0
        </span>
      </button>

      {/* MENU */}
      <ul className={isOpen ? 'block' : 'hidden'}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/features">Features</Link>
          <ul>
            <li className="hidden">Feature1</li>
            <li className="hidden">Feature2</li>
          </ul>
        </li>
        <li>
          <Link href="/pages">Pages</Link>
          <ul>
            <li className="hidden">Page1</li>
            <li className="hidden">Page2</li>
          </ul>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/login">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
};

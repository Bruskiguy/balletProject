import Link from "next/link";
import Image from "next/image";

export const MainNav = () => {
  return (
    <nav className="bg-transparent p-6 flex justify-between items-center drop-shadow-md sticky top-0 z-50">
      <div className="text-2xl ml-40 font-extralight text-pink-600">
        <Link href="/">
          <Image
            src="/images/FinalCropchatBalletLogo.png"
            alt="logo"
            width={70}
            height={70}
          />
        </Link>
      </div>
      <ul className="flex space-x-8 text-black-600 mr-40">
        <li>
          <Link
            href="/"
            className="hover:text-black-300 font-extralight underline-animation"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-black-300 font-extralight underline-animation"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-black-300 font-extralight underline-animation"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

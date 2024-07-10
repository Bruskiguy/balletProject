import Link from "next/link";

export const MainNav = () => {
  return (
    <nav className="bg-transparent p-4 flex justify-between items-center drop-shadow-md sticky top-0 z-50">
      <div className="text-2xl ml-10 font-bold text-pink-600">
        <Link href="/">Logo</Link>
      </div>
      <ul className="flex space-x-8 text-pink-600 mr-10">
        <li>
          <Link href="/" className="hover:text-pink-300 underline-animation">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-pink-300 underline-animation"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-pink-300 underline-animation"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

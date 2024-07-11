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
          <MenuButton href="/" text="Home" />
        </li>
        <li>
          <MenuButton href="/about" text="About" />
        </li>
        <li>
          <MenuButton href="/contact" text="Contact Us" />
        </li>
      </ul>
    </nav>
  );
};

type MenuButtonProps = {
  href: string;
  text: string;
};
const MenuButton = (props: MenuButtonProps) => (
  <Link
    href={props.href}
    className="hover:text-black-300 font-extralight relative after:absolute after:w-full after:scale-0 after:left-0 after:h-[2px] after:bottom-[-4px] after:bg-[#f9a8d4] after:transition-all after:origin-center hover:after:scale-100"
  >
    {props.text}
  </Link>
);

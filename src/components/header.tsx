import { useThemeContext } from "@/context/theme-context";
import { links } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";
import HamburgerMenu from "./hamburger-menu";

export default function Header() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <header className="relative z-50">
      <nav className="fixed left-0 right-0 top-0 flex h-16 items-center justify-between bg-gray-50 px-4 md:px-8 drop-shadow-lg dark:bg-gray-800">
        <Image
          src={
            theme === "light"
              ? "/images/logo-(black)-transparan.png"
              : "/images/logo-(white)-transparan.png"
          }
          width="40"
          height="40"
          alt="logo-axel"
        />

        <ul className="dark:text-gray-250 md:flex gap-6 hidden">
          {links.map((link) => (
            <li
              key={link.hash}
              className="text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
            >
              <Link href={link.hash}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 items-center">
          <button
            className="rounded-full bg-gray-800 p-3 text-white dark:bg-gray-50 dark:text-gray-800"
            onClick={toggleTheme}
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          <HamburgerMenu />
        </div>
      </nav>
    </header>
  );
}

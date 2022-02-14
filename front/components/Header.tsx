import Image from "next/image";
import Link from "next/link";
import Login from "./Login";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center py-4 bg-original-green md:py-4 ">
        <div className="ml-5 ">
          <Link href="/">
            <a
              className="inline-flex gap-2.5 items-center text-2xl font-bold text-black md:text-3xl"
              aria-label="logo"
            >
              <Image
                src="/study.png"
                alt="Landscape picture"
                width="30px"
                height="30px"
              />
              <div className="text-white">Benkyo</div>
            </a>
          </Link>
        </div>

        <nav className="hidden gap-12 lg:flex">
          <Link href="/">
            <a className="text-lg font-semibold text-gray-600 hover:text-indigo-500 active:text-indigo-700 transition duration-100">
              <Image src="/home.png" alt="" width="30px" height="30px" />
            </a>
          </Link>
          <Link href="/calendar">
            <a className="text-lg font-semibold text-gray-600 hover:text-indigo-500 active:text-indigo-700 transition duration-100">
              <Image src="/calendar.png" alt="" width="30px" height="30px" />
            </a>
          </Link>
          <Link href="/mail">
            <a className="text-lg font-semibold text-gray-600 hover:text-indigo-500 active:text-indigo-700 transition duration-100">
              <Image src="/mail.png" alt="" width="30px" height="30px" />
            </a>
          </Link>
        </nav>

        <div className="hidden flex-col gap-2.5 -ml-8 sm:flex-row sm:justify-center lg:flex lg:justify-start">
          <Login />
        </div>

        <button
          type="button"
          className="inline-flex gap-2 items-center py-2 px-2.5 text-sm font-semibold text-gray-500 active:text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg focus-visible:ring ring-indigo-300 md:text-base lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Menu
        </button>
      </header>
    </div>
  );
};

export default Header;

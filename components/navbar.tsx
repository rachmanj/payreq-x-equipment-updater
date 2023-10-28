import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-700 p-2">
      <Link href="/">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Payreq - X
          </span>
        </div>
      </Link>
      <div className="block lg:hidden"></div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            href="/equipments"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-400 hover:text-black hover:bg-slate-100 hover:rounded-sm hover:p-1 mr-4"
          >
            Equipments
          </Link>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

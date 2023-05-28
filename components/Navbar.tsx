import Link from "next/link";

const Navbar = () => {
  // all the nav items
  const links = [
    {
      id: 0,
      text: "Works",
      link: "/works",
    },
    {
      id: 2,
      text: "About",
      link: "/about",
    },
    {
      id: 3,
      text: "Contact",
      link: "/contact",
    },
  ];
  return (
    <nav className="sticky top-0 backdrop-blur-xl">
      <div className="container flex items-center justify-between gap-10 py-3">
        <div>
          <Link href="/" className="text-xl lg:text-2xl font-bold uppercase">Navbar</Link>
        </div>
        <ul className="flex items-center justify-end">
          {links.map((item) => {
            const { id, link, text } = item;
            return (
              <li key={id}>
                <Link
                  href={link}
                  className="hover:bg-gray-100 px-3 py-2 rounded-lg transition ease-in-out delay-150"
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

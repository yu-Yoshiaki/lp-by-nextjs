import { HomeIcon } from "@heroicons/react/outline";
import type { VFC } from "react";
import { NavLink } from "src/component/Button";

const items = [
  { href: "/", label: "", icon: <HomeIcon className="w-6 h-7" /> },
  { href: "/about", label: "私達について" },
  { href: "/article/list", label: "NEWS" },
];

/**
 * @package
 */
export const Header: VFC = () => {
  return (
    <header>
      <h1 className="py-4 text-4xl font-bold text-center bg-white border-b">Title</h1>
      <div className="flex justify-between items-center px-3 bg-white">
        <nav className="py-2 ">
          {items.map(({ href, label, icon }) => {
            return (
              <NavLink key={href} href={href} activeClassName="text-blue-500 ">
                <a className="inline-block py-4 px-6 text-lg hover:bg-black hover:text-white">
                  <div className="flex justify-between">
                    <div>{icon ?? ""}</div>
                    <div>{label}</div>
                  </div>
                </a>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

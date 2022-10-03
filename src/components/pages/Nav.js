import React from "react";
import { BiCategory } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
const Nav = () => {
  return (
    <>
      <nav className="bg-violet-200 flex justify-between items-center p-3 sticky top-0">
        <ul>
          <li>Sub-Categories</li>
        </ul>
        <ul className="flex items-center gap-3">
          <li className="text-xl">
            <BiCategory />
          </li>
          <li className="flex items-center">
            <input type="text" />
            <FaSearch className="ml-4" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;

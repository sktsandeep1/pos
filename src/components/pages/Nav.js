import React from "react";
import { FaSearch } from "react-icons/fa";
const Nav = () => {
  return (
    <>
      <nav className="bg-violet-200 flex justify-between items-center p-3 sticky top-0">
        <ul>
          <li>some categories</li>
        </ul>
        <ul>
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

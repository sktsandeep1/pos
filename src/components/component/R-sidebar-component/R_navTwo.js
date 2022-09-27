import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import { FaPlusCircle } from "react-icons/fa";
const R_navTwo = () => {
  return (
    <>
      <nav>
        <ul className="flex justify-around items-center ">
          <li className="text-xl text-red-600">
            <AiFillDelete />
          </li>
          <li className="flex gap-1 items-center">
            Cart Details <span>(5)</span>
            <span>
              <RiArrowDownSFill />
            </span>
          </li>
          <li>
            <FaPlusCircle />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default R_navTwo;

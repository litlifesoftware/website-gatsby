import { Link } from "gatsby";
import React from "react";

function NavbarItem(props) {
  return (
    <>
      <li className="flex items-center">
        <Link
          className={
            (props.navbarTransparent
              ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
              : "text-gray-800 hover:text-gray-600") +
            " px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
          }
          to={props.path}
          onClick={() => props.collapseNavbar()}
        >
          <p
            className={
              (props.navbarTransparent
                ? "lg:text-white text-gray-500"
                : "text-gray-500") + "text-lg leading-lg "
            }
          >
            {props.title}
          </p>
        </Link>
      </li>
    </>
  );
}

export default NavbarItem;

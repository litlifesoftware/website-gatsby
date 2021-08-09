import { Link } from "gatsby";
import React from "react";

function NavbarItem(props) {
  return (
    <Link
      className={
        props.mobile
          ? "text-gray-600 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          : "text-gray-400 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
      }
      to={props.path}
      onClick={()=>{}}
    >
      {props.title}
    </Link>
  );
}

export default NavbarItem;

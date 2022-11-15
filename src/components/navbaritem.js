import { Link } from "gatsby";
import React from "react";

function NavbarItem(props) {
  return (
    <Link
      className={
        props.mobile
          ? "text-gray-600 hover:text-gray-700 block px-3 py-4 rounded-md text-lg font-medium"
          : "text-customTextColors-primary hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
      }
      to={props.path}
      onClick={()=>{}}
    >
      {props.title}
    </Link>
  );
}

export default NavbarItem;

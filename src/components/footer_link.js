import React from "react";
import { Link } from "gatsby";

function FooterLink(props) {
  return (
    <Link
      className="text-gray-300 hover:text-white block py-1 rounded-md text-base sm:text-sm font-medium"
      to={props.path}
      onClick={() => {}}
    >
      {props.title}
    </Link>
  );
}

export default FooterLink;

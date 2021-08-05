import React from "react";

function NavbarButton(props) {
  return (
    <li className="flex items-center">
      <button
        onClick={() => {}}
        className={
          (props.navbarTransparent
            ? "bg-white text-gray-800 hover:bg-gray-700 active:bg-gray-100"
            : `${props.bgColor} hover:${props.bgColorHover} text-white active:${props.bgColorHover}`) +
          " text-xs font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-md hover:text-white outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
        }
        type="button"
        style={{ transition: "all .15s ease" }}
      >
        {props.label}
      </button>
    </li>
  );
}

export default NavbarButton;

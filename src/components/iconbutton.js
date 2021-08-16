import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function IconButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={
        (props.bgColor ?? "bg-white") +
        " " +
        (props.animated && "animate-pulse") +
        " " +
        (props.textColor ?? "text-gray-600") +
        " " +
        "hover:bg-gray-400 hover:text-white" +
        " " +
        "font-bold uppercase px-5 py-2 rounded-full shadow hover:shadow-md hover:text-white outline-none focus:outline-none lg:mr-1 lg:mb-0" +
        " " +
        "text-xs" +
        " " +
        "w-full sm:w-auto"
      }
      type="button"
      style={{ transition: "all .75s ease" }}
    >
      <span>
        <span className="pr-2">
          <FontAwesomeIcon icon={props.icon} />
        </span>
        <span className="font-semibold tracking-wider">{props.title}</span>
      </span>
    </button>
  );
}

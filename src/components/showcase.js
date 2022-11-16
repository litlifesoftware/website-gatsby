import React from "react";

import { Link } from "gatsby";

export default function Showcase(props) {
  return (
    <div className="max-w-7xl mx-auto py-12 px-8 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <div>
        <h6 className="text-2xl lg:text-3xl leading-9 font-bold tracking-widest text-customPurple-dark sm:leading-10">
          {props.title.toUpperCase()}
        </h6>
        <p className="text-customRed-600 font-normal text-xl pt-4">
          <span>{props.subtitle}</span>
        </p>
      </div>
      <div className="py-4">
        <Link to={props.link}>
          <button
            className={
              "text-gray-600" +
              " " +
              "hover:bg-gray-400 hover:text-white" +
              " " +
              "font-bold uppercase px-8 py-2 my-4 sm:2 rounded-full shadow hover:shadow-md hover:text-white outline-none focus:outline-none lg:mr-1 lg:mb-0" +
              " " +
              "text-base" +
              " " +
              "w-full sm:w-auto"
            }
            type="button"
          >
            <span>
              <span className="font-bold tracking-widest">{props.title}</span>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

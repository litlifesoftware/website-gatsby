import * as React from "react";

const TailwindTimesIcon = (props) => {
  return (
    <svg
      className={"h-6 w-6" + " " + (props.color ?? "text-white")}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default TailwindTimesIcon;

import * as React from "react";
import IconButton from "./iconbutton";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const PackageFeaturePreview = (props) => {
  let titleInitials = "";
  const splitArr = props.title.split(" ");
  splitArr.forEach((element) => {
    if (titleInitials.length > 2) return;
    titleInitials = titleInitials + element.substring(0, 1);
  });

  return (
    <div className="max-w-7xl mx-auto py-12 px-8 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-start">
      <div className="w-full md:w-1/3 mx-auto lg:mx-0">
        <div
          className="flex rounded-4xl mx-auto sm:mx-0 md:items-end bg-white shadow-lg w-48 h-48"
          data-aos="fade-right"
        >
          <p className="text-center flex justify-center items-center w-28 h-28 mx-auto my-auto py-auto px-auto text-4xl font-extrabold">
            {titleInitials.toUpperCase()}
          </p>
        </div>
      </div>
      <div
        className="py-8 lg:py-4 mx-auto lg:mx-8 md:w-2/3 text-center sm:text-left"
        data-aos="fade-left"
      >
        <div className="py-4 px-4">
          <h3 className="text-2xl font-semibold tracking-wider text-gray-800 text-center sm:text-left">
            {props.title.toUpperCase()}
          </h3>
          <p className="mt-2 text-lg leading-relaxed text-gray-500 text-center sm:text-left">
            {props.slogan}
          </p>
          <p className="pt-4">{props.description}</p>
          <div className="mt-8 text-center sm:text-left md:flex md:items-start">
            <a href={props.pubdev}>
              <IconButton title="Pub.dev" icon={faDownload} />
            </a>
            <div className="h-4 md:h-0 "></div>
            <a className="md:ml-4" href={props.github}>
              <IconButton title="GITHUB" icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </div>
    //my-4 sm:2
  );
};

export default PackageFeaturePreview;

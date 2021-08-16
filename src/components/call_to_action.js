import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import authorData from "../data/author_data";
import IconButton from "./iconbutton";

export default function CallToAction(props) {
  return (
    <div className="bg-customRed-100">
      <div className="max-w-7xl mx-auto py-12 px-8 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div>
          <h6 className="text-4xl leading-9 font-extrabold tracking-tight text-customRed-500 sm:leading-10">
            Want to try out our apps?
          </h6>
          <p className="text-customRed-600 font-normal text-xl pt-4">
            <span>Download them now on Google Play.</span>
          </p>
        </div>
        <div className="py-4">
          <a href={authorData.playStoreDeveloperPage}>
            <IconButton title="GOOGLE PLAY" icon={faGooglePlay} />
          </a>
        </div>
      </div>
    </div>
  );
}

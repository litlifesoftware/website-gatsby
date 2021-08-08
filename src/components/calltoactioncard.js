import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import IconButton from "./iconbutton";

export default function CallToActionCard(props) {
  return (
    <div className="bg-customRed-100">
      <div className="container mx-auto py-12 px-8 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between xl:w-1/2">
        <div>
          <h6 className="text-4xl leading-9 font-extrabold tracking-tight text-customRed-500 sm:leading-10">
            Want to try out our apps?
          </h6>
          <p className="text-customRed-600 font-normal text-xl pt-4">
            <span>Download them now on Google Play.</span>
          </p>
        </div>
        <div className="py-4">
          <IconButton title="GOOGLE PLAY" icon={faGithub} />
        </div>
      </div>
    </div>
  );
}

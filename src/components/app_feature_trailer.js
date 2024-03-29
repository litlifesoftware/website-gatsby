import * as React from "react";
import IconButton from "./iconbutton";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const AppFeatureTrailer = (props) => {
  return (
    <div className="bg-customGray-400">
      <div className="max-w-7xl mx-auto py-12 px-8 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-start">
        <div className="w-full lg:w-1/2 mx-auto lg:mx-0">
          <video controls>
            <source src={props.trailerAsset} type="video/mp4" />
          </video>
        </div>
        <div
          className="py-8 lg:py-4 mx-auto lg:mx-8 text-center sm:text-left"
          data-aos="fade-left"
        >
          <div className="mb-4 text-gray-400">
            <h6 className="text-2xl lg:text-3xl leading-9 font-bold tracking-widest sm:leading-10">
              {props.title.toUpperCase()}
            </h6>
            <p className="py-2" >{props.subtitle}</p>
          </div>
          <a href={`https://www.youtube.com/watch?v=${props.youtubeId}`}>
            <IconButton title="WATCH ON YOUTUBE" icon={faYoutube} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default AppFeatureTrailer;

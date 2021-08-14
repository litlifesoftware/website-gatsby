import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { Link } from "gatsby";
import * as React from "react";
import IconButton from "./iconbutton";

const AppFeaturePreview = (props) => {
  return (
    <div className="container mx-auto px-4 xl:w-1/2">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-3/12 mx-auto px-4 align-top">
          <Link to={props.route}>
            <div
              className="flex rounded-4xl mx-auto sm:mx-0 bg-white shadow-lg w-48 h-48"
              data-aos="fade-right"
            >
              {
                <props.icon className="w-28 h-28 mx-auto my-auto py-auto px-auto" />
              }
            </div>
          </Link>
        </div>

        <div
          className="w-full md:w-9/12 mx-auto px-4 sm:px-8 align-top"
          data-aos="fade-left"
        >
          <div className="py-4 px-4">
            <h3 className="text-2xl font-semibold  text-gray-800 text-center sm:text-left">
              {props.title}
            </h3>
            <p className="my-4 text-lg leading-relaxed text-gray-600 text-center sm:text-left">
              {props.slogan}
            </p>
            <p>{props.description}</p>
            <div className="mt-8 text-center sm:text-left">
              <a href={props.url}>
                <IconButton title="DOWNLOAD" icon={faGooglePlay} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFeaturePreview;

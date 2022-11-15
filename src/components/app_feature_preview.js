import * as React from "react";
import { Link } from "gatsby";
import IconButton from "./iconbutton";
import { faGithub, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

const AppFeaturePreview = (props) => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-8 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-start">
      <div className="w-full md:w-1/3 mx-auto lg:mx-0">
        <Link to={props.route}>
          <div
            className="flex rounded-4xl mx-auto sm:mx-0 md:items-end bg-white shadow-lg w-48 h-48"
            data-aos="fade-right"
          >
            {
              <props.icon className="w-28 h-28 mx-auto my-auto py-auto px-auto" />
            }
          </div>
        </Link>
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
            <Link to={props.link}>
              <button
                className={
                  "bg-white" +
                  " " +
                  "text-gray-600" +
                  " " +
                  "hover:bg-gray-400 hover:text-white" +
                  " " +
                  "font-bold uppercase px-5 py-2 rounded-full shadow hover:shadow-md hover:text-white outline-none focus:outline-none lg:mr-1 lg:mb-0" +
                  " " +
                  "text-regular sm:text-xs" +
                  " " +
                  "w-full sm:w-auto"
                }
                type="button"
              >
                <span>
                  <span className="font-bold tracking-widest">
                    More Details
                  </span>
                </span>
              </button>
            </Link>

            <div className="h-4 md:h-0 "></div>

            <a className="md:ml-4" href={props.url}>
              <IconButton title="PLAY STORE" icon={faGooglePlay} />
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

export default AppFeaturePreview;

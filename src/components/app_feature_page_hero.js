import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";

import * as React from "react";
import IconButton from "./iconbutton";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const AppFeaturePageHero = (props) => {
  return (
    <div className={props.backgroundColor ?? "bg-customBlue-700"}>
      <div className="py-12 lg:py-24">
        <div
          className="max-w-7xl mx-auto py-12 px-8 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
          data-aos="fade-left"
        >
          <div className="w-auto md:w-1/2 lg:w-96 ml-auto mr-auto lg:mr-2 py-8 lg:py-2">
            {/* {data.allFile.edges.map((image, key) => (
              <GatsbyImage
                key={key}
                alt={image.node.alt}
                fluid={image.node.childImageSharp.fluid}
                image={image}
              />
            ))} */}
            {props.screenshot}
          </div>

          <div
            className="w-auto md:w-1/2 lg:w-96 ml-auto mr-auto lg:ml-2 py-8 lg:py-2"
            data-aos="fade-left"
          >
            <div>
              <h2 className="tracking-tight leading-snug font-extrabold text-pink-100 text-4xl md:text-2xl sm:text-3xl lg:text-3xl sm:leading-none">
                {props.slogan}
              </h2>
              <p className="text-white text-xl sm:text-lg md:text-xl lg:text-base">
                {props.description}
              </p>
              <div className="py-2">
                <a href={props.url}>
                  <div className="py-2">
                    <IconButton title="GOOGLE PLAY" icon={faGooglePlay} />
                  </div>
                </a>
                <a href={props.latestRelease}>
                  <div className="py-2">
                    <IconButton title="DOWNLOAD APK" icon={faDownload} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFeaturePageHero;

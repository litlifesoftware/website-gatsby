import * as React from "react";
import { Link, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { faGithub, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import IconButton from "../components/iconbutton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import AppFeaturePageContent from "../components/app_feature_page_content";
import productData from "../data/product_data";
//import RemainingLifetimeScreenshot from "../components/remaining_lifetime_screenshot";
// import HistoryOfMePoster from "../assets/img/History_Of_Me_Website_Icon.png";

const AppFeatureKeywords = (props) => {
  return (
    <div>
      <div className="bg-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-8 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          {props.keywords.map((item, key) => {
            return (
              <div key={key} className="px-6">
                <div className="pt-6 text-left">
                  <h5 className="text-2xl font-semibold text-gray-700">
                    {item.headline}
                  </h5>
                  <p className="mt-1 text-base text-gray-600 font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default AppFeatureKeywords;

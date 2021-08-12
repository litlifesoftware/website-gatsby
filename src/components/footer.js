import React from "react";
import Icon256 from "./icons/icon_256";
// import LitLifeLogoDark from "../assets/img/lit-life-software-dark-1.png";

/**
 * Creates a Footer.
 *
 * It will list all available pages of this website and additional social media links
 * alongside some legal notes.
 * @param {Object} props
 */
export default function Footer(props) {
  return (
    <div className="bg-customBlue-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12 lg:mb-0">
            <div>
              {/* <img
                alt="..."
                src={LitLifeLogoDark}
                className="max-w-full"
                style={{ maxWidth: "80px" }}
              /> */}
              <Icon256 className="h-12 w-12" />
              <div className="py-4 text-left">
                <h5 className="text-lg font-semibold text-white">
                  LitLifeSoftware
                </h5>
                <button className="bg-gray-300 font-bold text-xs font-mono rounded-full py-2 px-4 my-2 shadow-lg tracking-wider hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition duration-500 ease-in-out">
                  {"<view-source>"}
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/12 lg:mb-0">
            <div>
              <div className="py-4 text-left">
                <h5 className="text-xl font-semibold text-white">Explore</h5>
                <ul className="pt-2">
                  <li>LINK</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/12 lg:mb-0">
            <div>
              <div className="py-4 text-left">
                <h5 className="text-xl font-semibold text-white">Privacy</h5>
                <ul className="pt-2">
                  <li>LINK</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-wrap">
            <div className="w-full md:w-4/12 lg:mb-0 mb-12 text-left">
              <p className="mt-1 text-xs text-gray-100 font-normal">
                Google Play and the Google Play Store are trademarks of Google
                LLC.
              </p>
            </div>
            <div className="w-full md:w-8/12 lg:mb-0 text-right">
              <div>
                <li>LINK</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import routes from "../routes/routes";
import links from "../routes/links";
import FooterLink from "./footer_link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import authorData from "../data/author_data";
import Logo512 from "./icons/logo_512";

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
      {/* Add bottom spacing to avoid overlapping with the cookie banner. */}

      <div
        className={`max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-12 sm:py-8 md:py-12 ${
          props.cookieConsentAccepted
            ? ""
            : "pb-40 sm:pb-28 md:pb-24"
        }`}
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12 lg:mb-0">
            <div>
              <Logo512 className="h-12 w-12 text-white fill-current" />
              <div className="py-4 text-left">
                <h5 className="text-2xl sm:text-lg font-semibold text-white">
                  LitLifeSoftware
                </h5>
                {/* <button className="bg-gray-300 font-bold text-xs font-mono rounded-full py-2 px-4 my-2 shadow-lg tracking-wider hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition duration-500 ease-in-out">
                  <a href={authorData.githubRepository.url}>
                    {"<view-source>"}
                  </a>
                </button> */}
                <a
                  href={authorData.githubRepository.url}
                  className="text-base sm:text-xs font-mono py-2 tracking-wider text-white hover:text-gray-400 transition duration-500 ease-in-out"
                >
                  {"<view-source>"}
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/12 lg:mb-0">
            <div>
              <div className="py-4 text-left">
                <h5 className="text-xl font-bold text-white tracking-widest">
                  EXPLORE
                </h5>
                <ul className="pt-2">
                  {routes.map((route, key) => {
                    const show = route.showOnFooter & !route.isLegal;
                    if (!show) return <span key={key}></span>;
                    return (
                      <FooterLink
                        key={key}
                        title={route.title}
                        path={route.path}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/12 lg:mb-0">
            <div>
              <div className="py-4 text-left">
                <h5 className="text-xl font-bold text-white tracking-widest">
                  PRIVACY
                </h5>
                <ul className="pt-2">
                  {routes.map((route, key) => {
                    const show = route.showOnFooter & route.isLegal;
                    if (!show) return <span key={key}></span>;
                    return (
                      <FooterLink
                        key={key}
                        title={route.title}
                        path={route.path}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-wrap">
            <div className="w-full md:w-4/12 lg:mb-0 mb-12 text-left">
              <p className="mt-1 text-xs text-gray-100 font-normal">
                {authorData.playStoreNotice}
              </p>
            </div>
            <div className="w-full md:w-8/12 lg:mb-0 text-right">
              <div>
                {links.map((link, key) => {
                  return (
                    <a
                      href={link.url}
                      key={key}
                      className="text-gray-300 hover:text-white inline px-2 rounded-md text-2xl sm:text-lg font-medium"
                    >
                      {<FontAwesomeIcon icon={link.icon} />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

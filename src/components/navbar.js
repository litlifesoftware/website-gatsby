import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "gatsby";
import { useState } from "react";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import NavbarItem from "./navbaritem";
import NavbarButton from "./navbarbutton";
// import LitLifeLogo from "../assets/img/smiley-icon-512px-1.png";

import routes from "../routes/routes";
import Icon256 from "./icon256";

export default function Navbar(props) {
  const [drawerExpanded, setNavbarOpen] = useState(false);
  const [navbarTransparent, setNavbarTransparent] = useState(true);

  function toggleNavbarOpen() {
    setNavbarOpen(!drawerExpanded);
  }

  function onScrollListener() {
    if (window.scrollY >= 55) {
      setNavbarTransparent(false);
    } else {
      setNavbarTransparent(true);
    }
  }

  function getNavbarStyle() {
    const defaultStyle = "fixed top-0 w-full z-50";
    return drawerExpanded || !navbarTransparent
      ? defaultStyle + " " + "bg-white shadow-md"
      : defaultStyle + " " + "bg-transparent";
  }

  React.useEffect(() => {
    window.addEventListener("scroll", onScrollListener);
    return () => {
      window.removeEventListener("scroll", onScrollListener, true);
      setNavbarTransparent(false);
    };
  }, []);

  return (
    // <>
    //   <nav
    //     className={
    //       (navbarTransparent ? "transparent" : "bg-white shadow-md") +
    //       " fixed z-50 w-full px-5 py-2 flex justify-between items-center"
    //     }
    //     style={{ transition: "all .15s ease" }}
    //   >
    //     <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    //       <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
    //         <Link
    //           className={
    //             (navbarTransparent ? "text-white" : "text-gray-600") +
    //             " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
    //           }
    //           to="/"
    //         >
    //           {/* <img style={{ maxWidth: "40px" }} src={LitLifeLogo} alt="" /> */}
    //           <h6>logo</h6>
    //         </Link>
    //         <button
    //           className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
    //           type="button"
    //           onClick={() => collapseNavbar()}
    //         >
    //           <FontAwesomeIcon
    //             icon={faBars}
    //             className={navbarTransparent ? "text-white" : "text-gray-600"}
    //           />
    //         </button>
    //       </div>
    //       <div
    //         className={
    //           "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
    //           (navbarOpen ? " block rounded shadow-lg" : " hidden")
    //         }
    //         id="example-navbar-warning"
    //       >
    //         <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
    //           {routes.map((route, key) => {

    //             if (route.showOnNavbar) {
    //               return (
    //                 <NavbarItem
    //                   key={key}
    //                   title={route.title}
    //                   path={route.path}
    //                   navbarTransparent={navbarTransparent}
    //                   collapseNavbar={collapseNavbar}
    //                 />
    //               );
    //             }
    //           })}

    //           {/* <NavbarItem
    //             title={"Irid Film Club"}
    //             navbarTransparent={navbarTransparent}
    //           /> */}

    //           {/* <li className="flex items-center">
    //             <a
    //               className={
    //                 (navbarTransparent
    //                   ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
    //                   : "text-gray-800 hover:text-gray-600") +
    //                 " px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
    //               }
    //               href="#pablo"
    //             >
    //               <p
    //                 className={
    //                   (navbarTransparent
    //                     ? "lg:text-gray-300 text-gray-500"
    //                     : "text-gray-500") +
    //                   "text-lg leading-lg "
    //                 }
    //               >
    //                 Remaining Lifetime
    //               </p>

    //             </a>
    //           </li> */}

    //           {/* <li className="flex items-center">
    //             <a
    //               className={
    //                 (navbarTransparent
    //                   ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
    //                   : "text-gray-800 hover:text-gray-600") +
    //                 " px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
    //               }
    //               href="#pablo"
    //             >
    //               <p
    //                 className={
    //                   (navbarTransparent
    //                     ? "lg:text-gray-300 text-gray-500"
    //                     : "text-gray-500") +
    //                   "text-lg leading-lg "
    //                 }
    //               >
    //                 Lit UI Kit
    //               </p>
    //               <span className="lg:hidden inline-block ml-2">Share</span>
    //             </a>
    //           </li> */}

    //           <NavbarButton
    //             url="https://play.google.com/store/apps/dev?id=6358212632242842077"
    //             navbarTransparent={navbarTransparent}
    //             bgColor={"bg-pink-400"}
    //             bgColorHover={"bg-pink-600"}
    //             label={"Google Play"}
    //           />

    //           <NavbarButton
    //             url="https://github.com/litlifesoftware"
    //             navbarTransparent={navbarTransparent}
    //             bgColor={"bg-purple-400"}
    //             bgColorHover={"bg-purple-600"}
    //             label={<FontAwesomeIcon icon={faGithub} />}
    //           />
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </>

    <nav className={getNavbarStyle()}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile burger button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleNavbarOpen}
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Desktop view */}
          <div className="flex-shrink-0 flex items-start justify-start">
            <Link to="/">
              <Icon256 className="h-10 w-10 hidden sm:block mr-auto" />
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {routes.map((route, key) => {
                  return (
                    route.showOnNavbar && (
                      <NavbarItem
                        key={key}
                        title={route.title}
                        path={route.path}
                        navbarTransparent={navbarTransparent}
                      />
                    )
                  );
                })}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <NavbarButton
              url="https://github.com/litlifesoftware"
              navbarTransparent={navbarTransparent}
              bgColor={"bg-customRed-500"}
              bgColorHover={"bg-gray-500"}
              label={<FontAwesomeIcon icon={faGithub} />}
            />
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div
        className={drawerExpanded ? " sm:hidden" : "hidden"}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {routes.map((route, key) => {
            return (
              route.showOnNavbar && (
                <NavbarItem
                  key={key}
                  title={route.title}
                  path={route.path}
                  navbarTransparent={navbarTransparent}
                  mobile={true}
                />
              )
            );
          })}
        </div>
      </div>
    </nav>
  );
}

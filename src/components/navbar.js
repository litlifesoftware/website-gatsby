import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "gatsby";
import { useState } from "react";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import NavbarItem from "./navbaritem";
import NavbarButton from "./navbarbutton";
import LitLifeLogo from "../assets/img/smiley-icon-512px-1.png";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbarTransparent, setActive] = useState(true);

  function collapseNavbar() {
    setNavbarOpen(!navbarOpen);
  }

  function changeBackground() {
    if (window.scrollY >= 55) {
      setActive(false);
    } else {
      setActive(true);
    }
  }

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav
        className={
          (navbarTransparent ? "transparent" : "bg-white shadow-md") +
          " fixed z-50 w-full px-5 py-2 flex justify-between items-center"
        }
        style={{ transition: "all .15s ease" }}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className={
                (navbarTransparent ? "text-white" : "text-gray-600") +
                " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
              }
              to="/"
            >
              <img style={{ maxWidth: "40px" }} src={LitLifeLogo} alt="" />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => collapseNavbar()}
            >
              <FontAwesomeIcon
                icon={faBars}
                className={navbarTransparent ? "text-white" : "text-gray-600"}
              />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {props.routes.map((route, key) => {
                if (route.showOnNavbar) {
                  return (
                    <NavbarItem
                      key={key}
                      title={route.title}
                      path={route.path}
                      navbarTransparent={navbarTransparent}
                      collapseNavbar={collapseNavbar}
                    />
                  );
                }
              })}

              {/* <NavbarItem
                title={"Irid Film Club"}
                navbarTransparent={navbarTransparent}
              /> */}

              {/* <li className="flex items-center">
                <a
                  className={
                    (navbarTransparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
                  }
                  href="#pablo"
                >
                  <p
                    className={
                      (navbarTransparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      "text-lg leading-lg "
                    }
                  >
                    Remaining Lifetime
                  </p>

                </a>
              </li> */}

              {/* <li className="flex items-center">
                <a
                  className={
                    (navbarTransparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
                  }
                  href="#pablo"
                >
                  <p
                    className={
                      (navbarTransparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      "text-lg leading-lg "
                    }
                  >
                    Lit UI Kit
                  </p>
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li> */}

              <NavbarButton
                url="/"
                navbarTransparent={navbarTransparent}
                bgColor={"bg-pink-400"}
                bgColorHover={"bg-pink-600"}
                label={"Google Play"}
              />

              <NavbarButton
                url="/"
                navbarTransparent={navbarTransparent}
                bgColor={"bg-purple-400"}
                bgColorHover={"bg-purple-600"}
                label={<FontAwesomeIcon icon={faGithub} />}
              />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

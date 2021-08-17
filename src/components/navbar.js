import React from "react";
import { Link } from "gatsby";
import { useState } from "react";
import authorData from "../data/author_data";
import routes from "../routes/routes";
import NavbarItem from "./navbaritem";
import IconButton from "../components/iconbutton";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Icon256 from "./icons/icon_256";
import TailwindBurgerIcon from "./icons/tailwind_burger_icon";

export default function Navbar(props) {
  const [drawerExpanded, setNavbarOpen] = useState(false);
  const [navbarTransparent, setNavbarTransparent] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  function toggleNavbarOpen() {
    setNavbarOpen(!drawerExpanded);
  }

  function onScrollListener() {
    if (window.scrollY >= 55 && isMounted) {
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
    setIsMounted(true);
    window.addEventListener("scroll", onScrollListener);
    return () => {
      window.removeEventListener("scroll", onScrollListener, true);
      setNavbarTransparent(false);
      setIsMounted(false);
    };
  }, []);

  return (
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

              <TailwindBurgerIcon />
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
            <a href={authorData.github}>
              <IconButton
                title="GitHub"
                icon={faGithub}
                textColor={
                  navbarTransparent ? "text-gray-500" : "text-gray-600"
                }
                bgColor={
                  navbarTransparent ? "bg-customRed-100" : "bg-indigo-200"
                }
                animated
              />
            </a>
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

import * as React from "react";
import { Link } from "gatsby";
import { faCookie, faMask } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import routes from "../routes/routes";
import IconButton from "./iconbutton";
import TailwindTimesIcon from "./icons/tailwind_times_icon";

/**
 * Returns a `CookieBanner`
 *
 * Displays a banner component allowing the user to accept the cookie policy.
 *
 */
const CookieBanner = () => {
  /**
   * Stores the route meta data.
   */
  const routeData = routes[routes.length - 1];

  /**
   * Stores the current state value stating whether the user has accepted the
   * cookie policy.
   */
  const [cookieConsentAccepted, setCookieConsentAccepted] = React.useState(
    typeof window !== "undefined"
      ? localStorage.getItem("cookie_concent") || ""
      : false
  );

  // Bind the persisten storage to the current client state.
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cookie_concent", cookieConsentAccepted);
    }
  }, [cookieConsentAccepted]);

  /**
   * Sets the `cookieConsentAccepted` to true.
   */
  function acceptCookies() {
    setCookieConsentAccepted(true);
  }

  return (
    !cookieConsentAccepted && (
      <div className="py-3 px-3 sm:px-6 lg:px-8 fixed bottom-0 w-full z-50 bg-white shadow-offset bg-opacity-60 backdrop-filter backdrop-blur-md">
        <div className="mx-auto max-w-7xl flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-gray-700">
              <FontAwesomeIcon icon={faCookie} color={"#ffffff"} />
            </span>
            <p className="ml-3 font-medium text-gray-700 truncate">
              <span className="md:hidden">We don't use cookies.</span>
              <span className="hidden md:inline">
                This website does not use cookies. User preferences are only
                stored on your device.
              </span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <Link to={routeData.path}>
              <IconButton title={routeData.title} icon={faMask} />
            </Link>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              onClick={acceptCookies}
            >
              <span className="sr-only">Dismiss</span>
              <TailwindTimesIcon color={"text-gray-700"} />
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookieBanner;

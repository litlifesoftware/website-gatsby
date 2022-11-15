/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import Navbar from "./navbar";
import Footer from "./footer";
import AOS from "aos";
import "aos/dist/aos.css";
import CallToAction from "./call_to_action";
import CookieBanner from "./cookie_banner";
// Tailwind main css file.
import "../styles/main.css";

const Layout = ({ children }) => {
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

  // Initialize the AOS package.
  React.useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 800,
      once: false,
    });
    AOS.refresh();
  });

  return (
    <div className="flex flex-col h-screen">
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <Navbar />
      <div>
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          {children}
        </main>
        <CallToAction />
        <Footer cookieConsentAccepted={cookieConsentAccepted} />
        <CookieBanner
          cookieConsentAccepted={cookieConsentAccepted}
          setCookieConsentAccepted={setCookieConsentAccepted}
        />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

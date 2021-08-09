/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "../styles/main.css";
import Navbar from "./navbar";
import Footer from "./footer";
import AOS from "aos";
import "aos/dist/aos.css";
import CallToActionCard from "./calltoactioncard";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

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
        <main className="flex-1 overflow-y-auto">{children}</main>
        <CallToActionCard />
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

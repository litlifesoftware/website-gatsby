import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const IndexPage = () => (
  // <Layout>
  //   <Seo title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <StaticImage
  //     src="../images/gatsby-astronaut.png"
  //     width={300}
  //     quality={95}
  //     formats={["AUTO", "WEBP", "AVIF"]}
  //     alt="A Gatsby astronaut"
  //     style={{ marginBottom: `1.45rem` }}
  //   />
  //   <p>
  //     <Link to="/page-2/">Go to page 2</Link> <br />
  //     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  //   </p>
  // </Layout>
  <div className="font-montserrat">
    {/* <ScrollToTop /> */}
    {/* <CookieConsentModal
    show={showCookieConsent}
    onDisagree={rejectPrivacy}
    onAgree={agreePrivacy}
  /> */}
    <Navbar
      routes={[
        {
          path: "/",
          title: "Home",
          showOnNavbar: true,
          showOnFooter: false,
        },
        {
          path: "/irid-film-club",
          title: "Irid Film Club",
          showOnNavbar: false,
          showOnFooter: false,
        },
        {
          path: "/remaining-lifetime",
          title: "Remaining Lifetime",
          showOnNavbar: true,
          showOnFooter: false,
        },
        {
          path: "/history-of-me",
          title: "History of Me",
          showOnNavbar: true,
          showOnFooter: false,
        },
        {
          path: "/privacy",
          title: "Privacy",
          showOnNavbar: false,
          showOnFooter: true,
        },
        {
          path: "/datenschutz",
          title: "Datenschutz",
          showOnNavbar: false,
          showOnFooter: true,
        },
      ]}
    />
    <Seo title="Home" />
    <div className="h-screen w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center h-full w-full mb-12 px-4 flex items-center">
          test
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default IndexPage;

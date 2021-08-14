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
import AppFeatureKeywords from "../components/app_feature_keywords";
//import RemainingLifetimeScreenshot from "../components/remaining_lifetime_screenshot";
// import HistoryOfMePoster from "../assets/img/History_Of_Me_Website_Icon.png";

const RemainingLifetimePage = () => {
  const data = productData[1];
  return (
    <Layout>
      <Seo title="Remaining Lifetime" />
      <AppFeaturePageContent
        backgroundColor="bg-customBlue-700"
        description={data.description}
        slogan={data.slogan}
        url={data.url}
        latestRelease={data.latestRelease}
        screenshot={
          <StaticImage
            src="../assets/img/RemainingLifetimeScreenshot.png"
            placeholder="blurred"
            alt="Remaining Lifetime"
          />
        }
      />
      <AppFeatureKeywords keywords={data.keywords} />
    </Layout>
  );
};
export default RemainingLifetimePage;

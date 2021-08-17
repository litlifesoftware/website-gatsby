import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

import productData from "../data/product_data";
import AppFeatureKeywords from "../components/app_feature_keywords";
import AppFeaturePageHero from "../components/app_feature_page_hero";

const RemainingLifetimePage = () => {
  const data = productData[1];
  return (
    <Layout>
      <Seo title="Remaining Lifetime" />
      <AppFeaturePageHero
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

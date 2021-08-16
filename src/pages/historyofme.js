import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import AppFeatureKeywords from "../components/app_feature_keywords";
import AppFeaturePageHero from "../components/app_feature_page_hero";
import productData from "../data/product_data";
import AppFeatureTrailer from "../components/app_feature_trailer";

import Trailer from "../assets/video/HistoryOfMe_Trailer.mp4";

const HistoryOfMePage = () => {
  const data = productData[0];
  return (
    <Layout>
      <Seo title="History of Me" />
      <AppFeaturePageHero
        backgroundColor="bg-gradient-to-bl from-herogradient-100 to-customRed-600"
        description={data.description}
        slogan={data.slogan}
        url={data.url}
        latestRelease={data.latestRelease}
        screenshot={
          <StaticImage
            src="../assets/img/HistoryOfMeScreenshot.png"
            placeholder="blurred"
            alt="History of Me"
          />
        }
      />
      <AppFeatureKeywords keywords={data.keywords} />
      <AppFeatureTrailer
        trailerAsset={Trailer}
        youtubeId={"58lSSH4YNj0"}
        title="Trailer"
        subtitle="Watch the trailer for the History Of Me app."
      />
    </Layout>
  );
};

export default HistoryOfMePage;

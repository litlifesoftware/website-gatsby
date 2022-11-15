import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import * as React from "react";
import AppFeaturePreview from "../components/app_feature_preview";
import IconButton from "../components/iconbutton";

import Layout from "../components/layout";
import PackageFeaturePreview from "../components/package_feature_preview";
import Seo from "../components/seo";
import packageData from "../data/package_data";

const Packages = () => (
  <Layout>
    <Seo title="Packages" />
    <div className="min-h-screen w-full bg-gradient-to-bl from-white to-gray-200">
      <div className="container mx-auto">
        <section className="relative py-20">
          {packageData.map((item, key) => {
            return (
              <PackageFeaturePreview
                key={key}
                title={item.title}
                slogan={item.slogan}
                description={item.description}
                github={item.github}
                pubdev={item.pubdev}
              />
            );
          })}
        </section>
      </div>
    </div>
  </Layout>
);

export default Packages;

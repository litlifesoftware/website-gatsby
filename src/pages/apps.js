import * as React from "react";
import AppFeaturePreview from "../components/app_feature_preview";

import Layout from "../components/layout";
import Seo from "../components/seo";
import productData from "../data/product_data";

const Apps = () => (
  <Layout>
    <Seo title="Apps" />
    <div className="min-h-screen w-full bg-gradient-to-bl from-white to-gray-200">
      <div className="container mx-auto">
        <section className="relative py-20">
          {productData.map((item, key) => {
            return (
              <AppFeaturePreview
                key={key}
                icon={item.icon}
                title={item.title}
                slogan={item.slogan}
                description={item.description}
                url={item.url}
                link={item.route}
                route={item.route}
                github={item.github}
              />
            );
          })}
        </section>
      </div>
    </div>
  </Layout>
);

export default Apps;

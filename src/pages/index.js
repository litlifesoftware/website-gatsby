import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Icon256 from "../components/icons/icon_256";
import authorData from "../data/author_data";
import productData from "../data/product_data";
import AppFeaturePreview from "../components/app_feature_preview";

const IndexPage = () => (
  <Layout>
    <Seo title="LitLifeSoftware" />

    <div className="h-screen w-full bg-gradient-to-bl from-herogradient-100 to-herogradient-200">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen w-full backdrop-blur-sm">
          <div>
            <Icon256 className="mx-auto py-8" data-aos="fade-right" />
            <div
              data-aos="fade-up"
              className="text-center font-extrabold text-4xl tracking-wide text-gray-200"
            >
              {authorData.slogan}
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="py-12 bg-customGray-100">
      <div className="container mx-auto px-4 xl:w-1/2">
        <div className="flex flex-wrap">
          <div className="w-full px-auto text-left" data-aos="fade-up">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-2xl">
              <div className="px-6 py-5 flex-auto">
                <h6 className="text-3xl font-semibold pb-4 text-gray-300">
                  About
                </h6>
                <p className="text-gray-600 font-light tracking-wider">
                  {authorData.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
            route={item.route}
          />
        );
      })}
    </section>
  </Layout>
);

export default IndexPage;
